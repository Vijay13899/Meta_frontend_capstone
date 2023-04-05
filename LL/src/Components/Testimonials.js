import "./styles.css";

const reviews = [
  {
    name: "Sam",
    text: "Little lemon is the best in town...",
    image: require("../assets/img1.jpg"),
    rating: "5"
  },
  {
    name: "Jen",
    text: "Little lemon has become the new fav....",
    image: require("../assets/img2.jpg"),
    rating: "4"
  },
  {
    name: "Kim",
    text: "There are few good restaurants in town and LL is one of 'em...",
    image: require("../assets/img4.jpg"),
    rating: "5"
  },
  {
    name: "Tom",
    text: "My favourite ever...",
    image: require("../assets/img5.jpg"),
    rating: "5"
  }
];

const Review = (props) => {
  return (
    <>
      <div className="review">
        <div className="rating">
          <h5>Rating</h5>
          <p>{props.rating}</p>
          <img src={require("../assets/img3.jpg")} alt="Rating logo" />
        </div>
        <div className="person">
          <img src={props.image} alt={props.name} />
          <p>{props.name}</p>
        </div>
        <p>{props.text}</p>
      </div>
    </>
  );
};

const Testimonials = () => {
  return (
    <div
      style={{
        backgroundColor: "#ee9972",
        padding: "30px",
        marginTop: "30px"
      }}
    >
      <h1
        style={{
          marginLeft: "200px",
          fontSize: "64px",
          fontFamily: "Markazi Text"
        }}
      >
        Testimonials
      </h1>
      <div className="reviews">
        {reviews.map((r) => (
          <Review
            name={r.name}
            image={r.image}
            text={r.text}
            rating={r.rating}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
