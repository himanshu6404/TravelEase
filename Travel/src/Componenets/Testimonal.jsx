import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import cust1 from '../assets/cust1.jpg';
import cust2 from '../assets/cust2.jpg';
import cust3 from '../assets/cust3.jpg';

const testimonials = [
  {
    name: "Jane Doe",
    image: cust2,
    description:
      "My Bali trip was absolutely incredible! The service was top-notch from start to finish. From booking to the final day, everything was so well-managed. I felt safe, relaxed, and truly on vacation. Definitely booking with them again next summer. Highly recommended for anyone who loves a smooth experience.",
  },
  {
    name: "John Smith",
    image: cust3,
    description:
      "Super impressed with the level of care and support during our trip. Booking was easy, pricing was fair, and the accommodations exceeded expectations. We didn’t face a single issue and had a blast! Their team was always available. Easily one of my best holiday experiences to date.",
  },
  {
    name: "Emily Stokes",
    image: cust1,
    description:
      "Everything was perfect — from the hotel to the transport arrangements. The itinerary was well-crafted and gave us enough freedom to explore at our pace. I loved how attentive the staff was. It truly felt like a luxury getaway. I’m telling all my friends to book from here!",
  },
];


const Testimonal = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4500,
    arrows: false,
  };

  return ( 
    <section className="py-16 bg-gray-200">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Verified Reviews</h2>
        <Slider {...settings}>
          {testimonials.map((dest, index) => (
            <div key={index}>
              <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow mx-4">
                <img src={dest.image} alt={dest.name} className="w-40 h-40 object-cover rounded-full mx-auto mt-2  border-3 border-white" />
                      <div className="p-6 text-center">
                          <div className="align items-center">
                              <div><h3 className="text-2xl font-semibold mb-1">{dest.name} </h3>
                              </div>
                          {/* <div className="flex items-end text-yellow-400 mb-3">
  {Array(5).fill().map((_, i) => (
    <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-current" viewBox="0 0 20 20">
      <path d="M10 15l-5.878 3.09L5.5 12.18 1 8.09l6.06-.88L10 2l2.94 5.21L19 8.09l-4.5 4.09 1.378 5.91z" />
    </svg>
  ))}
</div> */}
</div>

               

<p className="text-gray-600 text-sm leading-relaxed">{dest.description}</p>

                  <button className="bg-pink-600 hover:bg-pink-700 text-white py-2 px-4 rounded mt-4">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonal;
