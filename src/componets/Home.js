import { Link } from "react-router-dom";

const Home = () => (
  <div>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about/hey">About</Link>
      </li>
      <li>
        <Link to="/topics">Topics</Link>
      </li>
    </ul>
    <h2>Home</h2>
  </div>
);

export default Home;
