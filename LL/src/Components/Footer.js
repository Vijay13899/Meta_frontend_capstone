import "./styles.css";
import logo from "../assets/LLlogo2.PNG";

export default function Footer() {
  return (
    <div className="footer">
      <img src={logo} alt="LL logo" />
      <div>
        <p>Doormat Nav</p>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#history">About</a>
          </li>
          <li>
            <a href="#home">Reservations</a>
          </li>
          <li>
            <a href="#menu">Menu</a>
          </li>
          <li>
            <a href="#home">Login</a>
          </li>
          <li>
            <a href="#home">Orders</a>
          </li>
        </ul>
      </div>
      <div>
        <p>Contact</p>
        <ul>
          <li>
            <a href="#home">Phone</a>
          </li>
          <li>
            <a href="#home">Address</a>
          </li>
          <li>
            <a href="#home">email</a>
          </li>
        </ul>
      </div>
      <div>
        <p>Social media</p>
        <ul>
          <li>
            <a href="#home">Facebook</a>
          </li>
          <li>
            <a href="#home">LinkedIn</a>
          </li>
          <li>
            <a href="#home">Instagram</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
