# 🤖 Prepwise

**Prepwise** is an AI-powered interview preparation platform built with **Next.js**, **Firebase**, and **Vapi AI**. It provides a modern and intuitive interface where users can simulate job interviews with voice agents powered by **Google Gemini** and receive instant feedback for improvement.

---

## ⚙️ Tech Stack

- **Next.js** – UI and backend logic  
- **Firebase** – Authentication and database  
- **Tailwind CSS** – Styling  
- **Vapi AI** – Voice agents for interactive interviews  
- **shadcn/ui** – Modern UI components  
- **Google Gemini** – AI response and feedback generation  
- **Zod** – Schema validation

---

## 🔋 Features

- 🔐 **Authentication** – Sign up and log in via email/password (Firebase)  
- 🗣️ **AI Interviews** – Generate interviews with voice agents (Vapi + Gemini)  
- 🤖 **AI Feedback** – Receive real-time feedback and transcripts after each interview  
- 💻 **Modern UI/UX** – Sleek, responsive design using Tailwind CSS and shadcn/ui  
- 📋 **Dashboard** – Manage and track interview sessions  
- 📱 **Responsive Design** – Works smoothly across all device sizes  
- ⚙️ **Modular Codebase** – Clean architecture and reusable components

---

## 🚀 Quick Start

### Prerequisites

Make sure the following are installed:

- Git  
- Node.js  
- npm

### Clone the Repository

```bash
git clone https://github.com/adrianhajdin/ai_mock_interviews.git
cd ai_mock_interviews
Install Dependencies
bash
Copy
Edit
npm install
Environment Setup
Create a .env.local file in the root directory and add the following variables:

env
Copy
Edit
NEXT_PUBLIC_VAPI_WEB_TOKEN=
NEXT_PUBLIC_VAPI_WORKFLOW_ID=
GOOGLE_GENERATIVE_AI_API_KEY=

NEXT_PUBLIC_BASE_URL=

NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=

FIREBASE_PROJECT_ID=
FIREBASE_CLIENT_EMAIL=
FIREBASE_PRIVATE_KEY=
⚠️ Replace the placeholder values with your actual Firebase and Vapi credentials.

Run the Project
bash
Copy
Edit
npm run dev
Open http://localhost:3000 in your browser to view the app.

Happy Coding
