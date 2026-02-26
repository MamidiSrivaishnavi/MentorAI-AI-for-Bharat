import streamlit as st

st.set_page_config(page_title="MentorAI", page_icon="🧠")

st.title("🧠 MentorAI Prototype")
st.write("Confusion-aware AI mentor for students")

user_input = st.text_input("Ask your doubt")

if st.button("Send"):
    if user_input:
        # Temporary dummy mentor logic
        st.subheader("MentorAI Response")
        st.write(
            "I understand your confusion. Let's break it down step by step:\n\n"
            "👉 Start by identifying the core concept you're struggling with.\n"
            "👉 Try solving a small example.\n"
            "👉 If stuck, I can guide you with hints."
        )