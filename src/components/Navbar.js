import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./../context/auth.context";

function Navbar() {
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

  return (
    <nav id="navbar">
      <div id="left-buttons">
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/about">
          <button>About</button>
        </Link>
      </div>
      <div id="right-buttons">
        {isLoggedIn ? (
          user.isAdmin ? (
            <>
              <button>ISADMIN</button>
              <button onClick={logOutUser}>Logout</button>
            </>
          ) : (
            <>
              <Link to="/new-order">
                <button>Make an order</button>
              </Link>
              <Link to="/profile">
                <button>Profile</button>
              </Link>
              <button onClick={logOutUser}>Logout</button>
            </>
          )
        ) : (
          <>
            <Link to="/signup">
              <button>Make an order</button>
            </Link>
            <Link to="/login">
              <button>Login</button>
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
