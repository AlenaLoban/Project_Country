import "../css/App.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div
      className="page__home fullScreen"
      style={{
        backgroundImage: `url('1.jpg')`,
      }}
    >
      <div className="fullScreen__info info ">
        <h2>
          TRAVEL <span>with knowledges.</span>
        </h2>
        <div>
          {" "}
          Lorem ipsum dolor sit amet consectetur quo adipisicing elit. Dolor,
          quo eligendi?{" "}
        </div>
        <Link to="/catalog">
          {" "}
          <p className="info__link">Read more</p>{" "}
        </Link>
      </div>
    </div>
  );
};
export default Home;
