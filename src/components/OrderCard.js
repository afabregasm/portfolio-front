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
            <p>Descripción: {description}</p>
            <p>Estado: {status}</p>
            <p>Actualización: {modComment}</p>
          </>
        ) : (
          <>
            <h3>{title}</h3>
            <p>Descripción: {description}</p>
            <p>Estado: {status}</p>
            <p>Actualización: {modComment}</p>
          </>
        )
      ) : (
        <></>
      )}
    </div>
  );
}

export default OrderCard;
