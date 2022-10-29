import RegistrationPage from "./pages/RegistrationPage";
import LoginPage from "./pages/LoginPage";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/signin" element={<LoginPage />} />
        <Route exact path="/signup" element={<RegistrationPage />} />
      </Routes>
    </div>
  );
};

export default App;
