import { Link } from "react-router-dom";

function CodingProjectCard({ title, image, _id }) {
  return (
    <div className="CodingProjectCard">
      <Link to={`/coding-projects/${_id}`}>
        <img src={image} alt={title} />
      </Link>
    </div>
  );
}

export default CodingProjectCard;
