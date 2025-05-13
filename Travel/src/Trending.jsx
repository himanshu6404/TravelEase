import React from "react";
import bali_img from './assets/bali_Img.jpg'
import france_img from './assets/france_img.jpg'
import tokyo_img from './assets/tokyo_img.jpg'


const destinations = [
  {
    name: "Bali, Indonesia",
    image: bali_img,
    description: "Tropical paradise with stunning beaches, culture & nightlife.",
  },
  {
    name: "Paris, France",
    image: france_img,
    description: "City of Love filled with art, fashion, and gourmet food.",
  },
  {
    name: "Tokyo, Japan",
    image: tokyo_img,
    description: "Futuristic vibes meet rich tradition in the heart of Japan.",
  },
];

const FeaturedDestinations = () => {
  return (
    <section className="py-16 bg-gray-200">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Trending Destinations</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {destinations.map((dest, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow">
              <img src={dest.image} alt={dest.name} className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">{dest.name}</h3>
                      <p className="text-gray-600">{dest.description}</p>
                      <button className=" bg-pink-600 hover:bg-pink-700 text-white py-2 px-4 rounded mt-4">
          Book Now
        </button>
              </div>
            </div>
          ))}
        </div> 
      </div>
    </section>
  );
};

export default FeaturedDestinations;
