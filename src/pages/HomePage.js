import { Link } from "react-router-dom";
import leftBrain from "../images/glasses1l.png";
import rightBrain from "../images/glasses1r.png";
import leftGlass from "../images/glasses0l.png";
import rightGlass from "../images/glasses0r.png";

function HomePage() {
  return (
    <div id="home">
      <div id="container">
        <div id="left-div">
          <Link to="/coding-projects">
            <img className="brain" src={leftBrain} alt="left-brain" />
          </Link>
          <img className="glass" src={leftGlass} alt="left-glass" />
        </div>
        <div id="right-div">
          <Link to="/design-projects">
            <img className="brain" src={rightBrain} alt="right-brain" />
          </Link>
          <img className="glass" src={rightGlass} alt="right-glass" />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
