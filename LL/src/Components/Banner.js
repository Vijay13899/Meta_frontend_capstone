import { useNavigate } from "react-router-dom";
import restaurant from "../assets/restauranfood.jpg";
import "./styles.css";

function Banner(props) {
  const navigate = useNavigate();
  return (
    <>
      <div className="banner" id="home">
        <div className="bannerText">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            tincidunt lobortis varius. Curabitur maximus nec enim sed lobortis.
            Praesent turpis lacus, sodales id eros sed, consectetur pharetra
            ligula.
          </p>
          <button
            onClick={() => {
              props.homeFunc(false);
            }}
          >
            Reserve a table
          </button>
        </div>
        <img className="banner-img" src={restaurant} alt="Restaurant" />
      </div>
    </>
  );
}

export default Banner;
