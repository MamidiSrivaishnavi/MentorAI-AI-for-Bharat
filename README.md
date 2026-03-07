# MentorAI – AI for Bharat

MentorAI is a confusion-aware AI mentor designed to help students understand programming concepts through guided explanations rather than overwhelming answers.

The system encourages interactive learning by providing short explanations first, then gradually expanding into examples and step-by-step guidance when the student requests it.

---

## Overview

MentorAI aims to simulate how a human mentor teaches a concept:

1. Provide a short explanation.
2. Ask if the student wants more details.
3. Provide examples or step-by-step reasoning.
4. Continue the conversation interactively.

This approach helps beginners learn without information overload.

---

## Features

* Interactive AI mentor for programming concepts
* Conversation-based learning
* Step-by-step explanations
* Conversation history stored using DynamoDB
* Responsive chat interface
* New chat session support
* API throttling enabled for protection

---

## System Architecture

Frontend
HTML, CSS, JavaScript

Backend
AWS Lambda

AI Model
Amazon Bedrock (Nova Lite)

Database
AWS DynamoDB

API Layer
AWS API Gateway

Frontend Hosting
Vercel

---

## Project Structure

```
MentorAI-AI-for-Bharat
│
├── index.html
├── style.css
├── script.js
├── design.md
├── requirements.md
├── .gitignore
└── README.md
```

---

## How the System Works

1. A user asks a question through the chat interface.
2. The request is sent to AWS API Gateway.
3. API Gateway triggers an AWS Lambda function.
4. Lambda sends the prompt to Amazon Bedrock.
5. The response is returned to the frontend.
6. The conversation is stored in DynamoDB for session continuity.

---

## Deployment

Frontend deployed using Vercel.

After deployment the live link will be available at:

```
Add deployment link here
```

Example:

```
https://mentorai-ai-for-bharat.vercel.app
```

---

## Security Considerations

* API throttling enabled through API Gateway
* No AWS credentials stored in the repository
* Environment files ignored using `.gitignore`

---

## Author

Srivaishnavi Mamidi
BTech Computer Science Student

---

## Future Improvements

* Voice interaction
* Multi-language support
* Learning progress tracking
* Personalized AI tutoring experience
