import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./../context/auth.context";

function OrderCard({ title, description, status, modComment, _id }) {
  const { isLoggedIn, user } = useContext(AuthContext);

  return (
    <div className="OrderCard">
      {isLoggedIn ? (
        user.isAdmin ? (
          <>
            <Link to={`/all-orders/${_id}`}>
              <h3>{title}</h3>
            </Link>
            <h5>Descripción: {description}</h5>
            <h5>Estado: {status}</h5>
            <h5>Actualización: {modComment}</h5>
          </>
        ) : (
          <>
            <h3>{title}</h3>
            <h5>Descripción: {description}</h5>
            <h5>Estado: {status}</h5>
            <h5>Actualización: {modComment}</h5>
          </>
        )
      ) : (
        <></>
      )}
    </div>
  );
}

export default OrderCard;
