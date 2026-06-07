# AI Handwritten Digit Recognition System

A modern AI-powered web application for recognizing handwritten digits using Deep Learning, Computer Vision, FastAPI, and React.

---

# 🚀 Project Overview

This project is an AI-based Handwritten Digit Recognition System that predicts handwritten digits (0–9) using a trained Convolutional Neural Network (CNN) model.

The application provides multiple ways to interact with the AI model:

- Upload handwritten digit images
- Draw digits directly on canvas
- Real-time webcam digit recognition
- Voice-assisted prediction output
- Prediction confidence scores
- Prediction history tracking

The system is designed with a modern responsive UI and production-style architecture.

---

# ✨ Features

## 🔍 AI Digit Prediction

- Upload handwritten digit images
- Predict digits from 0–9
- Display confidence score
- Fast real-time inference

## ✍️ Drawing Canvas Prediction

- Draw digits directly in browser
- AI predicts drawn digits instantly
- Interactive canvas experience

## 🎥 Live Webcam Recognition

- Real-time webcam digit detection
- Continuous AI prediction
- Live prediction overlay

## 🔊 Voice Output

- Speaks predicted digit using browser speech synthesis

## 📜 Prediction History

- Stores previous predictions
- Displays confidence and timestamp

## 🎨 Modern UI/UX

- Glassmorphism design
- Responsive layouts
- Smooth animations
- Gradient styling
- Interactive cards

---

# 🧠 AI Model Details

## Model Type

Enhanced CNN (Convolutional Neural Network)

## Technologies Used

- TensorFlow / Keras
- OpenCV
- NumPy
- Image Augmentation

## Training Techniques

- Data augmentation
- Batch normalization
- Dropout regularization
- Attention mechanism
- Early stopping
- Learning rate scheduling

## Achieved Performance

- Validation Accuracy: ~99%

---

# 🛠️ Tech Stack

## Frontend

- React.js
- Tailwind CSS
- Framer Motion
- Axios
- React Webcam
- React Sketch Canvas

## Backend

- FastAPI
- Python
- TensorFlow/Keras
- OpenCV

---

# 📂 Project Structure

```text
AI-Handwritten-Digit-Recognition/
│
├── backend/
│   ├── app/
│   │   ├── main.py
│   │   ├── model_service.py
│   │   └── preprocessing.py
│   │
│   ├── model/
│   │   └── best_digit_model.keras
│   │
│   ├── notebook/
│   │   └── digit_recognition.ipynb
│   │
│   └── requirements.txt
│
├── frontend/
│   ├── public/
│   │
│   ├── src/
│   │   ├── components/
│   │   │   ├── AnimatedBackground.jsx
│   │   │   ├── DrawCanvas.jsx
│   │   │   ├── HeroSection.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── PredictionCard.jsx
│   │   │   ├── UploadSection.jsx
│   │   │   └── WebcamSection.jsx
│   │   │
│   │   ├── services/
│   │   │   └── speech.js
│   │   │
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   │
│   ├── package.json
│   └── vite.config.js
│
├── .gitignore
└── README.md