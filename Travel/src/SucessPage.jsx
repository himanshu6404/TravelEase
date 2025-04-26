import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import jsPDF from 'jspdf';

const SuccessPage = () => {
  const location = useLocation();
  const bookingData = location.state || {};

  useEffect(() => {
    if (bookingData) {
      const doc = new jsPDF();
      
      doc.setFont("helvetica", "normal");
        doc.setFontSize(12);
        doc.text('Booking Confirmation', 20, 20);
      
      doc.setFontSize(16);
      doc.text(`Hotel Name: ${bookingData.hotelName}`, 20, 40);
      doc.text(`Location: ${bookingData.hotelLocation}`, 20, 50);
      doc.text(`Name: ${bookingData.name}`, 20, 60);
      doc.text(`Phone: ${bookingData.phone}`, 20, 70);
      doc.text(`Check-In: ${bookingData.checkIn}`, 20, 80);
      doc.text(`Check-Out: ${bookingData.checkOut}`, 20, 90);
      doc.text(`Guests: ${bookingData.guests}`, 20, 100);
      doc.text(`Total Price:${bookingData.totalPrice}`, 20, 110);

      doc.setFontSize(14);
      doc.text('Thank you for booking with us!', 20, 130);

      doc.save('Booking_Confirmation.pdf');
    }
  }, [bookingData]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-green-100">
      <h1 className="text-4xl font-bold text-green-700 mb-6">Booking Confirmed!</h1>
      <p className="text-xl text-green-800 mb-4">Your booking has been successfully completed. 🎉</p>
      <p className="text-md text-green-700">A PDF with your booking details has been downloaded.</p>
    </div>
  );
};

export default SuccessPage;
