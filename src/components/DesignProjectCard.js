import { Link } from "react-router-dom";

function DesignProjectCard({ title, image, _id }) {
  return (
    <div className="DesignProjectCard">
      <Link to={`/design-projects/${_id}`}>
        <h3>{title}</h3>
        <img src={image} alt={title} />
      </Link>
    </div>
  );
}

export default DesignProjectCard;
