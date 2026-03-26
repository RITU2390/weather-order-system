# 🌦 Weather-Based Order Delay System

## 📌 Overview
This project processes customer orders and checks real-time weather conditions using the OpenWeatherMap API. Based on weather conditions, it flags deliveries as delayed and generates personalized apology messages.

---

## 🚀 Features
- Parallel API fetching using Promise.all
- Weather-based delay detection
- AI-style personalized apology messages
- Error handling for invalid cities
- Secure API key using .env

---

## 🛠 Tech Stack
- Node.js
- Axios
- OpenWeatherMap API
- dotenv

---

## 📂 Project Structure
weather-order-system/
├── orders.json
├── index.js
├── .env
├── README.md
├── AI_LOG.md



---

## ⚙️ Setup Instructions

1. Clone repository
2. Install dependencies:
   npm install
3. Add API key in `.env`
4. Run:
   node index.js

---

## 🔄 Workflow
1. Read orders.json
2. Fetch weather data concurrently
3. Check for Rain / Snow / Extreme
4. Update order status
5. Generate apology message
6. Save updated JSON

---

## ⚠️ Error Handling
- Invalid city handled gracefully
- API errors do not crash program

---

## 📸 Output
Orders are updated with:
- Status (Delayed / On Time / Error)
- Personalized message

---

## 🎥 Demo
(Add your Loom/Drive link here)

---

## 📌 Conclusion
This solution demonstrates strong understanding of:
- Async programming
- API handling
- AI prompting concepts
- Error handling and resilience