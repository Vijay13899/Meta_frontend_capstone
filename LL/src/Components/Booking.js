import { useState } from "react";
import BookingForm from "./BookingForm";

const TableBookingHeader = () => {
  return (
    <div className="tblHead">
      <h1>Little Lemon Restaurant</h1>
      <h2>Table Booking</h2>
    </div>
  );
};

const CompletedBooking = () => {
  return (
    <>
      <h1
        style={{
          fontFamily: "Markazi Text",
          textAlign: "center",
          fontSize: "50px"
        }}
      >
        Registration Successful
      </h1>
      <h5 style={{ textAlign: "center" }}>
        Click home at top of the page to get back to home...
      </h5>
    </>
  );
};

const Booking = () => {
  const [isComplete, setIsComplete] = useState(false);
  return (
    <>
      <TableBookingHeader />
      {isComplete ? (
        <CompletedBooking />
      ) : (
        <BookingForm completed={setIsComplete} />
      )}
    </>
  );
};

export default Booking;
