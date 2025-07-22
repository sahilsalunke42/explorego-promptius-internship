# 🌍 Trip Booking Platform — Promptius Assignment

A responsive and interactive travel booking frontend built using **React.js**, **Tailwind CSS**, and **Framer Motion** as part of a full stack internship assignment for Promptius AI.

This project simulates a real-world travel agency platform where users can browse, filter, and view details about different trip packages.

---

## 🚀 Live Demo
[Click to Visit](https://your-deployed-link.vercel.app)  
*(Replace this link with your actual deployed site)*

---

## 📸 Screenshots

| Home Page | Search Results | Trip Details |
|-----------|----------------|--------------|
| ![Home](./screenshots/home.png) | ![Search](./screenshots/search.png) | ![Details](./screenshots/details.png) |

---

## 🛠️ Tech Stack

- ⚛️ React.js (Vite)
- 💨 Tailwind CSS
- 🎞️ Framer Motion (page transitions + animations)
- 🧠 React Context (mock auth handling)
- 🗂️ Static JSON data for trip packages

---

## 📁 Folder Structure

trip-booking-app/
├── public/
│ └── trips.json
├── src/
│ ├── assets/
│ ├── components/
│ ├── pages/
│ ├── context/
│ ├── data/
│ ├── styles/
│ ├── App.jsx
│ └── main.jsx
└── README.md

---

## ✅ Features Implemented

### 🔹 Pages (3 of 5)
- **Home Page**: Hero section with search bar + image carousel
- **Search Results Page**: Trip listings with filter options (price, duration, location)
- **Trip Details Page**: Detailed view with image slider, itinerary, and price breakdown

### 🔹 UI/UX
- Fully **responsive** design (desktop, tablet, mobile)
- Smooth **animations** using Framer Motion
- Tailwind utility-first styling for performance

### 🔹 Functionality
- Live **filtering** (client-side) of trips by price, duration, location
- JSON-based **dynamic data rendering**
- **Mock authentication** using React Context + localStorage

---

## 📦 How to Run Locally

```bash
# Clone this repo
git clone https://github.com/yourusername/trip-booking-app
cd trip-booking-app

# Install dependencies
npm install

# Start dev server
npm run dev

The trip data is stored as static JSON and fetched on-demand to simulate real APIs.

State is managed using React's built-in hooks, while filtering and rendering use Array methods.

I used Framer Motion to elevate the experience with micro-interactions and smooth page transitions.

## Future Improvements
- Add step-by-step checkout form
- Integrate real payment gateway for full e-commerce simulation
- Add user authentication using Firebase/Auth0


## Author
Sahil Salunke
🔗 [Portfolio](https://your-portfolio-link.com)
🔗 [GitHub](https://github.com/yourusername)
🔗 [LinkedIn](https://www.linkedin.com/in/yourusername)
📧 sahilsalunke42@gmail.com

---
