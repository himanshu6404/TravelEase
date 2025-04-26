import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const getGreeting = () => { // wecome card
  const hour = new Date().getHours();
  if (hour < 12) return "Good Morning";
  if (hour < 18) return "Good Afternoon";
  return "Good Evening";
};

function Dashboard() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        navigate("/");
        return;
      }

      try {
        const response = await fetch('http://localhost:8000/api/v1/users/me', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`, // IMPORTANT
          },
        });
        

        if (!response.ok) {
          console.log("Failed to fetch user");
          navigate("/login");

        } else {
          alert("User fetched successfully!");
          const userData = await response.json();
          console.log("User data:", userData); // Log the user data for debugging
          setUser(userData);
        }
      } catch (error) {
        console.error("Error fetching user:", error);
        navigate("/login");
      }
    };

    fetchUser();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  if (!user) return <div>Loading...</div>;

  return (
  
      <div className="min-h-screen bg-gray-100 flex flex-col">
      
    {/* Navbar */}
    <div className="flex items-center bg-gray-100 border-cyan-500 p-6 shadow-md">
  {/* Logo */}
  <div className="flex-1 flex justify-start">
    <a href="/" className="text-3xl font-bold text-gray-900">
      TravelEase
    </a>
  </div>

  {/* Welcome Text */}
  <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent animate-pulse">
  <h1> {getGreeting()}, {user.user.email} 👋 </h1>

</h1>


  {/* Logout Button */}
  <div className="flex-1 flex justify-end">
    <button 
      onClick={handleLogout} 
      className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition">
      Logout
    </button>
  </div>
</div>


    {/* Main content */}
    <div className="p-8 flex-1">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Book Hotels */}
        <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-800">Book Hotels</h2>
            <span className="text-blue-500 text-2xl">🏨</span>
          </div>
          <p className="text-gray-600 mb-4">Find and book your perfect stay with us.</p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg w-full transition">
            Book Now
          </button>
        </div>

        {/* Upcoming Bookings */}
        <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-800">Upcoming Bookings</h2>
            <span className="text-green-500 text-2xl">🛫</span>
          </div>
          <p className="text-gray-600 mb-4">No upcoming bookings yet.</p>
          <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg w-full transition">
            View Bookings
          </button>
        </div>

        {/* Past Bookings */}
        <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-800">Past Bookings</h2>
            <span className="text-yellow-400 text-2xl">🧳</span>
          </div>
          <p className="text-gray-600 mb-4">No past bookings yet.</p>
          <button className="bg-yellow-400 hover:bg-yellow-500 text-white px-4 py-2 rounded-lg w-full transition">
            View History
          </button>
            </div>
            
                    {/* Explore Destinations*/}
        <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-800"> Explore Destinations</h2>
            <span className="text-blue-500 text-2xl">🗺️</span>
          </div>
          <p className="text-gray-600 mb-4">Discover amazing places to visit and create new memories.</p>
          <button className="bg-yellow-400 hover:bg-yellow-500 text-white px-4 py-2 rounded-lg w-full transition">
            Explore Now
          </button>
        </div>

        {/* Saved Trips */}
        <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-800">Saved Trips</h2>
            <span className="text-green-500 text-2xl">📌</span>
          </div>
          <p className="text-gray-600 mb-4">Trips you've saved for later. Ready whenever you are!.</p>
          <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg w-full transition">
            View Saved
          </button>
        </div>

        {/* Special Deals*/}
        <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-800">Special Deals</h2>
            <span className="text-yellow-400 text-2xl">🎁</span>
          </div>
          <p className="text-gray-600 mb-4">Grab the hottest travel deals and discounts — limited time!</p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg w-full transition">
            Check Offers
          </button>
        </div>
      </div>
    </div>
  </div>

)
}

export default Dashboard;
