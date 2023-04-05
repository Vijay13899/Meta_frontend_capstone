import { useState } from "react";
import "./styles.css";

const BookingForm = (props) => {
  const minimumDate = new Date().toISOString().split("T")[0];
  const [date, setDate] = useState(minimumDate);
  const [seats, setSeats] = useState(1);
  return (
    <div className="form">
      <fieldset>
        <label htmlFor="seats">Number of seats</label>
        <input
          type="number"
          min="1"
          max="10"
          name="seats"
          value={seats}
          onChange={(e) => {
            setSeats(e.target.value);
          }}
        />
        <label htmlFor="date">Date</label>
        <input
          type="date"
          name="date"
          min={minimumDate}
          value={date}
          onChange={(e) => {
            setDate(e.target.value);
          }}
        />
        <label>Select time</label>
        <select>
          <option value="5:30">5:30 P.M</option>
          <option value="6:30">6:30 P.M</option>
          <option value="7:30">7:30 P.M</option>
          <option value="8:30">8:30 P.M</option>
          <option value="9:00">9:00 P.M</option>
        </select>
        <label>Select Occasion</label>
        <select>
          <option>Birthday</option>
          <option>Engagement</option>
          <option>Anniversary</option>
        </select>
        <div className="submit">
          <button
            onClick={() => {
              props.completed(true);
            }}
          >
            Make Reservation
          </button>
        </div>
      </fieldset>
    </div>
  );
};

export default BookingForm;
