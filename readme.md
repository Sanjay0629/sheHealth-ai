# 🌸 sheHealth-AI

![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-⚡-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?logo=tailwind-css&logoColor=white)
![Flask](https://img.shields.io/badge/Flask-Python-black?logo=flask&logoColor=white)
![Python](https://img.shields.io/badge/Python-3.8+-3776AB?logo=python&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green)
![Status](https://img.shields.io/badge/Status-Active-success)

**sheHealth-AI** is a comprehensive, AI-powered health prediction platform focused on **women’s health**.  
It leverages multiple **machine learning models**, each deployed as an independent backend service, and exposes them through a **modern, responsive web interface**.

The platform provides predictive insights for:
- Anemia  
- Breast Cancer  
- PCOS  
- Thyroid Disorders  
- Osteoporosis  

---

## 🛠 Tech Stack

### Frontend
- **Framework:** React 18 + TypeScript (Vite)
- **Styling & UI:** Tailwind CSS, Shadcn UI, Radix UI
- **Routing:** React Router DOM
- **Animations:** Framer Motion
- **Data Visualization:** Recharts
- **Forms & Validation:** React Hook Form, Zod
- **Testing:** Vitest, React Testing Library

### Backend
- **Framework:** Python (Flask)
- **Architecture:** Microservices-based ML prediction services
- **CORS:** Flask-CORS
- **Model Serving:** Independent Flask APIs per disease

---

## 📦 Project Structure

sheHealth-ai/
├── frontend/ # React + Vite web application
└── backend/
├── anemia-backend-model/ # Anemia prediction service (Port 5003)
├── breast-cancer-backend-model/ # Breast Cancer prediction service
├── osteoporosis-backend-model/ # Osteoporosis prediction service
├── pcos-backend-model/ # PCOS prediction service
└── thyroid-backend-model/ # Thyroid prediction service


Each backend model runs as an **independent Flask service**, enabling modular development and scalable deployment.

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** v16 or higher
- **Python** 3.8+
- **pip** (Python package manager)

---

## 🌐 Frontend Setup

```bash
cd frontend
npm install
npm run dev

🧠 Backend Setup (Example: Anemia Model)

cd backend/anemia-backend-model
python -m venv venv
Activate virtual environment:

Windows

venv\Scripts\activate
Linux / macOS

source venv/bin/activate
Install dependencies:

pip install -r requirements.txt
Run the service:

python app.py
🔹 Service URL: http://0.0.0.0:5003

Repeat the same steps for other backend services.

🔌 API Reference
🩸 Anemia Prediction API
Health Check

Endpoint: /health
Method: GET

{
  "status": "running",
  "service": "Anemia Prediction API"
}

Predict Anemia

Endpoint: /predict/anemia
Method: POST

Headers

Content-Type: application/json


Request Body

{
  "Gender": 1,
  "Hemoglobin": 12.5,
  "MCH": 29.0,
  "MCHC": 34.0,
  "MCV": 85.0
}

🧪 Testing

Run frontend tests:

cd frontend
npm run test


Watch mode:

npm run test:watch