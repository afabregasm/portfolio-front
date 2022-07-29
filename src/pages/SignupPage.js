import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signupService } from "../services/auth.services";

function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setName] = useState("");
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState(undefined);

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handleName = (e) => setName(e.target.value);

  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    // Create an object representing the request body
    const requestBody = { email, password, username };
    try {
      await signupService(requestBody);
      navigate("/login");
    } catch (err) {
      if (err.response?.status === 400) {
        setErrorMessage(err.response.data.message);
      }
    }
  };

  return (
    <div className="SignupPage">
      <h1>Crear cuenta</h1>
      <br />
      <form onSubmit={handleSignupSubmit}>
        <label>Correo electrónico:</label>
        <input type="text" name="email" value={email} onChange={handleEmail} />

        <label>Contraseña:</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handlePassword}
        />

        <label>Nombre de usuario:</label>
        <input
          type="text"
          name="username"
          value={username}
          onChange={handleName}
        />
        <br />
        <button type="submit">Registrarse</button>
      </form>

      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <br />
      <p>¿Ya tienes una cuenta?</p>
      <Link to={"/login"}>Inicia sesión</Link>
    </div>
  );
}

export default SignupPage;
