import { Link } from "react-router-dom";

function DesignProjectCard({ title, images, _id }) {
  return (
    <div className="ProjectCard">
      <Link to={`/design-projects/${_id}`}>
        <img src={images[0]} alt={title} />
      </Link>
    </div>
  );
}

export default DesignProjectCard;
