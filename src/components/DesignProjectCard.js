import { Link } from "react-router-dom";

function DesignProjectCard({ title, images, _id }) {
  return (
    <div className="DesignProjectCard">
      <Link to={`/design-projects/${_id}`}>
        <h3>{title}</h3>
        <img src={images[0]} alt={title} />
      </Link>
    </div>
  );
}

export default DesignProjectCard;
