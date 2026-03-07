const API_URL = "https://hxctlgcmm1.execute-api.us-east-1.amazonaws.com/mentor"


// create unique session
let sessionId = localStorage.getItem("mentor_session")

if(!sessionId){

sessionId = "session_" + Math.random().toString(36).substring(2) + Date.now()

localStorage.setItem("mentor_session",sessionId)

}


function scrollToBottom(){

const chatbox = document.getElementById("chatbox")

chatbox.scrollTop = chatbox.scrollHeight

}


async function sendMessage(){

const input = document.getElementById("userInput")

const chatbox = document.getElementById("chatbox")

const question = input.value.trim()

if(question === "") return



// show user message

chatbox.innerHTML += `
<div class="message user">
${question}
</div>
`

scrollToBottom()

input.value = ""



// thinking message

const thinking = document.createElement("div")

thinking.className = "message bot"

thinking.innerText = "Thinking..."

chatbox.appendChild(thinking)

scrollToBottom()



try{

const response = await fetch(API_URL,{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({
question:question,
session_id:sessionId
})

})

const data = await response.json()

thinking.remove()

let reply = data.reply



// remove markdown symbols

reply = reply.replace(/#{1,6}\s?/g,"")
reply = reply.replace(/\*\*/g,"")
reply = reply.replace(/\*/g,"")



// convert new lines

reply = reply.replace(/\n/g,"<br>")



chatbox.innerHTML += `
<div class="message bot">
${reply}
</div>
`

scrollToBottom()

}

catch(error){

thinking.remove()

chatbox.innerHTML += `
<div class="message bot">
Error connecting to AI mentor.
</div>
`

console.error(error)

}

}



// press enter to send

document.getElementById("userInput")
.addEventListener("keypress",function(event){

if(event.key==="Enter"){
sendMessage()
}

})



// new chat button

function newChat(){

sessionId = "session_" + Math.random().toString(36).substring(2) + Date.now()

localStorage.setItem("mentor_session",sessionId)

document.getElementById("chatbox").innerHTML = `
<div class="message bot">
Hello! Tell me what you're learning or stuck on.
</div>
`

}