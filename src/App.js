import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import ResumePage from "./pages/ResumePage";
import EditResumePage from "./pages/EditResumePage";
import CodingProjectListPage from "./pages/CodingProjectListPage";
import CodingProjectDetailsPage from "./pages/CodingProjectDetailsPage";

import PrivateRoute from "./components/PrivateRoute";
import AnonRoute from "./components/AnonRoute";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route
          exact
          path="/signup"
          element={
            <AnonRoute>
              <SignupPage />
            </AnonRoute>
          }
        />
        <Route
          exact
          path="/login"
          element={
            <AnonRoute>
              <LoginPage />
            </AnonRoute>
          }
        />
        <Route exact path="/about" element={<ResumePage />} />
        <PrivateRoute>
          <Route exact path="/about/:id" element={<EditResumePage />} />
        </PrivateRoute>
        <Route
          exact
          path="/coding-projects"
          element={<CodingProjectListPage />}
        />
        <Route
        //   exact
        //   path="/design-projects"
        //   element={<DesignProjectListPage />}
        />
        <Route
          exact
          path="/coding-projects/:id"
          element={<CodingProjectDetailsPage />}
        />
        <Route
        //   exact
        //   path="/design-projects/:id"
        //   element={<DesignProjectDetailsPage />}
        />
      </Routes>
    </div>
  );
}

export default App;
