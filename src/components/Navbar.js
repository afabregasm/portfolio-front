import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./../context/auth.context";
import logo from "../images/afabregasm-logo.png";

function Navbar() {
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

  return (
    <nav id="navbar">
      <div id="left-buttons">
        <Link to="/">
          <button>
            <img className="App-logo" src={logo} alt={logo} />
          </button>
        </Link>
        <Link to="/about">
          <button>Información</button>
        </Link>
      </div>
      <div id="right-buttons">
        {isLoggedIn ? (
          user.isAdmin ? (
            <>
              <Link to="/all-orders">
                <button>Revisar encargos</button>
              </Link>
              <button onClick={logOutUser}>Cerrar sesión</button>
            </>
          ) : (
            <>
              <Link to="/profile">
                <button>Tus encargos</button>
              </Link>
              <button onClick={logOutUser}>Cerrar sesión</button>
            </>
          )
        ) : (
          <>
            <Link to="/signup">
              <button>Hacer un encargo</button>
            </Link>
            <Link to="/login">
              <button>Iniciar sesión</button>
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
