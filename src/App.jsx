import RegistrationPage from "./pages/RegistrationPage";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/home" element={<DashboardPage />} />
        <Route exact path="/signin" element={<LoginPage />} />
        <Route exact path="/signup" element={<RegistrationPage />} />
      </Routes>
    </div>
  );
};

export default App;
