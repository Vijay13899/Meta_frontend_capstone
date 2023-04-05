import "./styles.css";
import restaurant from "../assets/restaurant.jpg";

function History() {
  return (
    <>
      <div className="banner" style={{ marginTop: "-0.5%" }} id="history">
        <div className="bannerText">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <h2>A little History about us...</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            tincidunt lobortis varius. Curabitur maximus nec enim sed lobortis.
            Praesent turpis lacus, sodales id eros sed, consectetur pharetra
            ligula.
          </p>
        </div>
        <img className="banner-img" src={restaurant} alt="Restaurant" />
      </div>
    </>
  );
}

export default History;
