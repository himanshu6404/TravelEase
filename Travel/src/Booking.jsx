import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import hotel_p1 from './assets/hotel_p1.jpg'
import hotel_p2 from './assets/hotel_p2.jpg'
import hotel_p3 from './assets/hotel_p3.jpg'



const hotels = [
  {
    name: "Hotel Sunshine 🌞",
    location: "Goa",
    price: 4000,
    image: hotel_p1,
  },
  {
    name: "Mountain View Resort 🏔️",
    location: "Manali",
    price: 3500,
    image:hotel_p2,
  },
  {
    name: "Beach Paradise 🏖️",
    location: "Kerala",
    price: 5000,
    image: hotel_p3,
  },
];


const BookingPage = () => {
    const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // simulate search delay
  };

  return (
      <div className="p-8 min-h-screen bg-gray-50">
            <div className="flex-1 flex justify-start">
    <a href="/" className="text-3xl font-bold text-gray-900">
      TravelEase
    </a>
  </div>
      <h1 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-blue-800 via-red-500 to-yellow-500 bg-clip-text text-transparent animate-pulse">Book Your Dream Stay 🛎️</h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <input type="text" placeholder="Destination" className="border p-2 rounded-lg" />
        <input type="date" className="border p-2 rounded-lg" />
        <input type="date" className="border p-2 rounded-lg" />
        <input type="number" min="1" placeholder="Guests" className="border p-2 rounded-lg" />
      </div>

      <div className="flex justify-center mb-10">
        <button 
          onClick={handleSearch}
          className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-3 rounded-xl transition shadow-lg hover:scale-105"
        >
          Search Hotels
        </button>
      </div>

      {isLoading ? (
        <div className="flex justify-center">
          <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-20 w-20 mb-6 animate-spin"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {hotels.map((hotel, index) => (
            <div key={index} className="rounded-xl shadow-lg hover:shadow-2xl transition transform hover:scale-105 bg-white overflow-hidden">
              <img src={hotel.image} alt={hotel.name} className="h-48 w-full object-cover" />
              <div className="p-5">
                <h2 className="text-2xl font-bold mb-2">{hotel.name}</h2>
                <p className="text-gray-600">{hotel.location}</p>
                <p className="text-gray-800 font-semibold mt-2">₹{hotel.price}/night</p>
                <button
  onClick={() => navigate('/hotelbooking', {
    state: {
      hotelName: hotel.name,
      hotelLocation: hotel.location,
        price: hotel.price,
        image: hotel.image,
    },
  })}
  className="bg-blue-600 hover:bg-blue-700 text-white mt-4 px-6 py-2 rounded-full transition w-full"
>
  Book Now
</button>


              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BookingPage;
