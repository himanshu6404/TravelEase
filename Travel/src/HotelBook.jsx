import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

const HotelBook = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { hotelName, hotelLocation, price, image } = location.state || {};

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    checkIn: "",
    checkOut: "",
    guests: 1,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const bookingData = { ...formData, hotelName, hotelLocation, price };
    navigate('/payment', { state: bookingData });
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Booking Details</h1>

      {hotelName ? (
        <div className="bg-white p-6 rounded-lg shadow-md">
          
          <div className="flex justify-between pb-4 pr-4">
            {/* Hotel Info */}
            <div className="mt-6 p-4 rounded-xl">
              <h2 className="text-3xl font-bold text-blue-700 mb-2">{hotelName}</h2>
              <p className="text-lg text-gray-600 font-medium mb-1">
                📍 Location: <span className="font-semibold text-black">{hotelLocation}</span>
              </p>
              <p className="text-lg text-gray-600 font-medium">
                💰 Price per night: <span className="font-semibold text-green-600">₹{price}</span>
              </p>
            </div>

            {/* Hotel Image */}
            <div className="mt-6 p-4 rounded-xl shadow-md">
              {image && (
                <img
                  src={image}
                  alt={hotelName}
                  className="w-full h-32 object-cover rounded-xl"
                />
              )}
            </div>
          </div>

          {/* Booking Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Full Name */}
            <div>
              <label className="block mb-1 font-semibold">Full Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border rounded-lg p-2"
                required
              />
            </div>

            {/* Phone Number */}
            <div>
              <label className="block mb-1 font-semibold">Phone Number</label>
              <input
                type="tel"
                name="phone"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full border rounded-lg p-2"
                required
              />
            </div>

            {/* Check In and Check Out */}
            <div className="flex gap-4">
              <div className="w-full">
                <label className="block mb-1 font-semibold">Check-In Date</label>
                <input
                  type="date"
                  name="checkIn"
                  value={formData.checkIn}
                  onChange={handleChange}
                  className="w-full border rounded-lg p-2"
                  required
                />
              </div>

              <div className="w-full">
                <label className="block mb-1 font-semibold">Check-Out Date</label>
                <input
                  type="date"
                  name="checkOut"
                  value={formData.checkOut}
                  onChange={handleChange}
                  className="w-full border rounded-lg p-2"
                  required
                />
              </div>
            </div>

            {/* Number of Guests */}
            <div>
              <label className="block mb-1 font-semibold">Number of Guests</label>
              <input
                type="number"
                name="guests"
                placeholder="Enter number of guests"
                value={formData.guests}
                min="1"
                onChange={handleChange}
                className="w-full border rounded-lg p-2"
                required
              />
            </div>

            {/* Confirm Booking Button */}
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg w-full transition"
            >
              Confirm Booking
            </button>
          </form>
        </div>
      ) : (
        <p>No hotel selected. Please go back and select a hotel.</p>
      )}
    </div>
  );
};

export default HotelBook;
