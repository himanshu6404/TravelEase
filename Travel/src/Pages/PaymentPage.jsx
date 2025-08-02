import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const PaymentPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const bookingData = location.state || {};

  const { name, phone, checkIn, checkOut, guests, hotelName, hotelLocation, price } = bookingData;

  const [totalPrice, setTotalPrice] = useState(0);
  const [nights, setNights] = useState(0);
  const [rooms, setRooms] = useState(0);

  useEffect(() => {
    if (checkIn && checkOut) {
      const checkInDate = new Date(checkIn);
      const checkOutDate = new Date(checkOut);
      const timeDifference = checkOutDate.getTime() - checkInDate.getTime();
      const calculatedNights = Math.ceil(timeDifference / (1000 * 3600 * 24));
      const calculatedRooms = Math.ceil(guests / 2);
      const finalPrice = price * calculatedNights * calculatedRooms;

      setNights(calculatedNights);
      setRooms(calculatedRooms);
      setTotalPrice(finalPrice);
    }
  }, [checkIn, checkOut, guests, price]);

  const handlePayment = () => {
    alert("Payment Successful! 🎉");
    const finalBookingData = {
      ...bookingData,
      totalPrice, // Ensure that totalPrice is calculated here
    };
    navigate('/success', { state: finalBookingData });
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Payment Summary</h1>

      <div className="bg-white p-6 rounded-lg shadow-md space-y-4">
        <h2 className="text-2xl font-semibold">{hotelName}</h2>
        <p>📍 Location: {hotelLocation}</p>
        <p>👤 Name: {name}</p>
        <p>📞 Phone: {phone}</p>
        <p>🗓️ Check-in: {checkIn}</p>
        <p>🗓️ Check-out: {checkOut}</p>
        <p>👥 Guests: {guests}</p>
        <p>🛏️ Rooms: {rooms}</p>
        <p>🌙 Nights: {nights}</p>
        <p className="text-xl font-bold text-blue-600">Total Price: ₹{totalPrice}</p>

        <button
          onClick={handlePayment}
          className="mt-4 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg w-full transition"
        >
          Pay Now
        </button>
      </div>
    </div>
  );
};

export default PaymentPage;
