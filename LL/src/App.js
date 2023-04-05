import "./styles.css";
import HomePage from "./Components/HomePage";
import { Route, Routes } from "react-router-dom";
import Booking from "./Components/Booking";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/booking" element={<Booking />} />
      </Routes>
      <HomePage />
    </>
  );
}
