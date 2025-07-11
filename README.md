# 🧳 TravelEase

TravelEase is a full-stack hotel booking platform where users can browse, book, and manage hotel reservations with ease. Built using the **MERN stack** (MongoDB, Express.js, React.js, Node.js), TravelEase aims to deliver a seamless and responsive experience for both users and administrators.

---

## 🚀 Features

### 🧑 User Side
- 🔐 User authentication (login/signup)
- 🏨 Browse hotel listings with images, details, and availability
- 📅 Book hotels with check-in/check-out dates
- 💳 Integrated payment page
- ✅ Booking success confirmation
- 📂 View and manage your bookings (Dashboard)

### 🛠️ Admin Side (Upcoming or Optional)
- ✏️ Add, update, and delete hotel listings
- 📊 Dashboard with bookings overview
- 👥 Manage user reservations

---

## 🛠️ Tech Stack

### 💻 Frontend
- React.js
- React Router
- Tailwind CSS / Custom CSS
- Axios

### 🔙 Backend
- Node.js
- Express.js
- MongoDB (Mongoose)

### 💳 Payment Integration
- Razorpay / Stripe *(based on your integration)*

---

## 📁 Project Structure

traveleEase/
│
├── client/ # React frontend
│ ├── public/
│ └── src/
│ ├── components/
│ ├── pages/
│ └── App.jsx
│
├── server/ # Node.js backend
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ ├── config/
│ └── server.js
│
├── .env
├── package.json
└── README.md



---

## 🧑‍💻 Getting Started

### ⚙️ Prerequisites
- Node.js
- MongoDB (local or cloud)
- NPM/Yarn

### 🔧 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/traveleEase.git
   cd traveleEase
cd server
npm install
cd ../client
npm install
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
# Start backend
cd server
npm run dev

# Start frontend
cd ../client
npm start


