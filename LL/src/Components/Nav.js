import React from "react";
import LLlogo from "../assets/LLlogo.PNG";
import "./styles.css";

function Nav(props) {
  return (
    <>
      <nav>
        <a href="#home">
          <img className="logo" src={LLlogo} alt="Logo" />
        </a>
        <ul>
          <li>
            <a
              href="#home"
              onClick={() => {
                props.homeFunc(true);
              }}
            >
              HOME
            </a>
          </li>
          <li>
            <a href="#history">ABOUT</a>
          </li>
          <li>
            <a href="#home">RESERVATIONS</a>
          </li>
          <li>
            <a href="#menu">MENU</a>
          </li>
          <li>
            <a href="#home">LOGIN</a>
          </li>
          <li>
            <a href="#home">ORDERS</a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Nav;
