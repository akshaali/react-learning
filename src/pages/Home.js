import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Home </h1>
      <ul>
        <li>
          <Link to={"/about"}>About us here......</Link>
        </li>
        <li>
          <Link to={"/contact-us"}>To contact us</Link>
        </li>
        <li>
          <Link to={"/cat-list"}>Cat listing.</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
