# 🌍 ExploreGo – Promptius Internship Assignment

A modern, responsive travel booking interface built with **React.js**, designed as part of the Full Stack Internship assignment for **Promptius AI**.

ExploreGo helps users search, explore, and view detailed trip information with clean UI, smooth animations, and mobile-first responsiveness.

🔗 [Live Demo](https://explorego-promptius-internship.vercel.app/)

---

## 🚀 Tech Stack

- **React.js** – Component-based frontend
- **Tailwind CSS** – Utility-first modern styling
- **Framer Motion** – Page transitions and animations
- **React Slick** – Destination carousel
- **React Spinners** – Custom loader component
- **React Toastify** – Toast notifications for forms

---

## 📸 Features Overview

- ✅ **Home Page**: Navbar, animated hero section, and a search bar  
- ✅ **About Section**: Explains platform purpose and benefits  
- ✅ **Explore Page**: Carousel of destinations with dynamic images  
- ✅ **Search Results Page**: Detailed view of selected destination with pricing, itinerary, and rating  
- ✅ **Login & Signup Pages**: Form validation and notifications using Toastify  
- ✅ **Loader Component**: Displayed during async actions using `react-spinners`  
- ✅ **Fully Responsive**: Works seamlessly on mobile, tablet, and desktop  

---

## 📂 Folder Structure Highlights

```
📦 explorego/
├── public/                    #svg images
├── src/
│   ├── assets/                # Images, icons, backgrounds
│   ├── components/            # Reusable UI elements
│   │   ├── Carousel.jsx
│   │   ├── Footer.jsx
│   │   ├── Loader.jsx
│   │   ├── MobileMenu.jsx
│   │   ├── Navbar.jsx
│   │   └── SearchBar.jsx
│   ├── context/               # Global context (if any)
│   ├── hooks/                 # Custom React hooks (if used)
│   ├── pages/                 # Route-based components
│   │   ├── auth/              # Login and Signup forms
│   │   ├── About.jsx
│   │   ├── Home.jsx
│   │   └── TripDetails.jsx
│   ├── utils/                 # Utility functions and dummy data
│   │   └── trips.js
│   ├── App.jsx                # Route config and layout
│   ├── index.css              # Tailwind and global styles
│   └── main.jsx               # React entry point
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
└── README.md

```

---

## 🧠 My Approach

This project was approached with the intent to simulate a real-world frontend application using best practices in modular React development. The focus areas were:

- Clean, readable, and reusable component structure  
- State-driven interactions and animations  
- User-centric UI/UX with consistent responsiveness  
- Minimalistic and modern design using Tailwind's utility classes  
- 3+ fully implemented pages as required: Home, Explore, and Search Results  

Authentication and protected routes were intentionally left out of this version to focus on core UI functionality. They can be easily added in future iterations.

---

## 🛠️ Steps to Run the Application Locally

1. **Clone the repository**
   ```bash
   git clone https://github.com/sahilsalunke42/explorego-promptius-internship.git
   cd explorego
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. Open in browser:  
   [http://localhost:5173](http://localhost:5173)

---

## 📝 Future Improvements

- Add authentication and protected routes  
- Integrate real API for dynamic data  
- Improve accessibility (ARIA roles, alt tags, etc.)  
- Add dark mode support  

---

🔗 [Live Site](https://explorego-promptius-internship.vercel.app/)
