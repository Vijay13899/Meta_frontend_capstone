import React, { useState } from "react";
import Banner from "./Banner";
import Footer from "./Footer";
import Nav from "./Nav";
import Specials from "./Specials";
import History from "./History";
import Testimonials from "./Testimonials";
import Booking from "./Booking";

function HomePage() {
  const [isHome, setIsHome] = useState(true);
  return (
    <>
      <Nav homeFunc={setIsHome} />
      {isHome ? (
        <>
          <Banner homeFunc={setIsHome} />
          <Specials />
          <Testimonials />
          <History />
        </>
      ) : (
        <Booking />
      )}
      <Footer />
    </>
  );
}

export default HomePage;
