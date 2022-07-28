import "./App.css";
import { Route, Routes } from "react-router-dom";

import AnonRoute from "./components/AnonRoute";
import PrivateRoute from "./components/PrivateRoute";
import Navbar from "./components/Navbar";

import HomePage from "./pages/HomePage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import ResumePage from "./pages/ResumePage";
import UserProfilePage from "./pages/UserProfilePage";
import AllOrdersPage from "./pages/AllOrdersPage";
import EditOrderPage from "./pages/EditOrderPage";
import CodingProjectListPage from "./pages/CodingProjectListPage";
import DesignProjectListPage from "./pages/DesignProjectListPage";
import CodingProjectDetailsPage from "./pages/CodingProjectDetailsPage";
import DesignProjectDetailsPage from "./pages/DesignProjectDetailsPage";

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
        <Route
          exact
          path="/coding-projects"
          element={<CodingProjectListPage />}
        />
        <Route
          exact
          path="/design-projects"
          element={<DesignProjectListPage />}
        />
        <Route
          exact
          path="/coding-projects/:id"
          element={<CodingProjectDetailsPage />}
        />
        <Route
          exact
          path="/design-projects/:id"
          element={<DesignProjectDetailsPage />}
        />
        <Route
          exact
          path="/all-orders"
          element={
            <PrivateRoute>
              <AllOrdersPage />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path="/all-orders/:id"
          element={
            <PrivateRoute>
              <EditOrderPage />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path="/profile"
          element={
            <PrivateRoute>
              <UserProfilePage />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
