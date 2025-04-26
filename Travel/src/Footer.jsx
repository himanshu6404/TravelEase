import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8">
        
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">TravelEase</h2>
          <p>Your Trusted Partner for Unforgettable Travel Experiences.</p>
        </div>
 
        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#destinations" className="hover:underline">Destinations</a></li>
            <li><a href="#testimonials" className="hover:underline">Testimonials</a></li>
            <li><a href="#newsletter" className="hover:underline">Subscribe</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Contact Us</h3>
          <p>Email: support@TravelEase.com</p>
          <p>Phone: +1 234 567 890</p>
          <div className="flex space-x-4 mt-4">
            {/* Add your social links */}
            <a href="#" className="hover:text-pink-500">Instagram</a>
            <a href="#" className="hover:text-pink-500">Facebook</a>
          </div>
        </div>

      </div>

      {/* Bottom Line */}
      <div className="text-center mt-10 text-gray-500 text-sm">
        © 2025 TravelEase. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
