import "./styles.css";

function Specials() {
  return (
    <>
      <div className="menu" id="menu">
        <h1>This weeks Specials!!</h1>
        <button>Online Menu</button>
      </div>
      <div className="cards">
        <Card
          image={require("../assets/greek salad.jpg")}
          name="Greek Salad"
          price="$12.99"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tincidunt lobortis varius."
        />
        <Card
          image={require("../assets/lemon dessert.jpg")}
          name="Lemon Dessert"
          price="$4.99"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tincidunt lobortis varius."
        />
        <Card
          image={require("../assets/bruchetta.PNG")}
          name="Bruchetta"
          price="$9.99"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tincidunt lobortis varius."
        />
      </div>
    </>
  );
}

function Card(props) {
  return (
    <>
      <div className="card">
        <img src={props.image} alt="Food" className="splImg" />
        <div className="card-title">
          <p>{props.name}</p>
          <p>{props.price}</p>
        </div>
        <p>{props.desc}</p>
        <button>Order Now!</button>
      </div>
    </>
  );
}

export default Specials;
