import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div id="home">
      <div id="container">
        <Link to="/coding-projects">
          <div id="left-div"></div>
        </Link>
        <Link to="/design-projects">
          <div id="right-div"></div>
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
