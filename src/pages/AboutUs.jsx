import { Link } from "react-router-dom";
const AboutUs = () => {
  return (
    <div className="container page">
      <h1>Lorem sit amet consectetur dignissimos!</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius magni
        asperiores fuga adipisci tempore doloremque.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius magni
        asperiores fuga adipisci tempore doloremque. Lorem ipsum, dolor sit amet
        consectetur adipisicing elit. Placeat iusto sunt amet officia?{" "}
      </p>
      <div className="read-more">
        <h3>List of all</h3>
        <Link to="/catalog">catalog</Link>
      </div>
    </div>
  );
};
export default AboutUs;
