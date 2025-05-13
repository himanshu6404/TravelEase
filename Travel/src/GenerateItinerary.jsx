import React, { useState } from 'react';

const GenerateItinerary = () => {
  const [destination, setDestination] = useState('');
  const [days, setDays] = useState('');
  const [preferences, setPreferences] = useState('');
  const [itinerary, setItinerary] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGenerate = async (e) => {
    e.preventDefault();

    setLoading(true);
    setItinerary('');

    try {
      const response = await fetch('https://travelease-m121.onrender.com/api/v1/users/generate-itinerary', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          destination,
          days,
          preferences: preferences.split(',').map(item => item.trim()),
        }),
      });

      const data = await response.json();
      setItinerary(data.itinerary);
    } catch (error) {
      console.error('Error generating itinerary:', error);
      setItinerary('Failed to generate itinerary. Please try again.');
    } finally {
      setLoading(false);
    }
  };

    return (
      <>
        <div className="bg-gray-900 min-h-screen text-white p-8">
        <div className="logo">
        <a href="/" className="text-2xl font-bold text-white">
          TravelEase
        </a>
      </div>
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center text-gradient mb-8">
          🛫 AI Travel Itinerary Generator
        </h1>

        <form onSubmit={handleGenerate} className="bg-gray-800 p-8 rounded-lg shadow-lg space-y-6">
          <div>
            <label className="block text-lg font-semibold mb-2">Destination:</label>
            <input
              type="text"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              required
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="flex space-x-4">
            <div className="flex-1">
              <label className="block text-lg font-semibold mb-2">Number of Days:</label>
              <input
                type="number"
                value={days}
                onChange={(e) => setDays(e.target.value)}
                required
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div className="flex-1">
              <label className="block text-lg font-semibold mb-2">Preferences:</label>
              <input
                type="text"
                placeholder="e.g. adventure, food, relaxation"
                value={preferences}
                onChange={(e) => setPreferences(e.target.value)}
                required
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-md transition duration-300"
          >
            {loading ? 'Generating...' : 'Generate Itinerary'}
          </button>
        </form>

        {loading && (
          <div className="text-center text-xl font-semibold text-blue-500 mt-6">
            Loading your perfect trip... ✈️
          </div>
        )}

        {itinerary && (
          <div className="bg-gray-800 p-6 mt-6 rounded-lg shadow-md whitespace-pre-wrap leading-relaxed text-gray-200">
            <h2 className="text-2xl font-bold mb-4">Your Custom Itinerary:</h2>
            {itinerary}
          </div>
        )}
      </div>
            </div>
            </>
  );
};

export default GenerateItinerary;
