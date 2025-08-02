import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import SignIn from "./Pages/SignIn.jsx";
import Dashboard from "./Pages/Dashboard.jsx";
import SignUp from "./Pages/SignUp.jsx";
import Booking from "./Pages/Booking.jsx";
import HotelBook from "./Pages/HotelBook.jsx";
import PaymentPage from "./Pages/PaymentPage.jsx";
import SuccessPage from "./Pages/SucessPage.jsx";
import GenerateItinerary from "./Pages/GenerateItinerary.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/hotelbooking" element={<HotelBook />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/success" element={<SuccessPage />} />
        <Route path="/generate-itinerary" element={<GenerateItinerary />} />


      </Routes>
    </Router>
  );
} 

export default App;
