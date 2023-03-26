import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/login/login";
import Home from "./pages/home/home";
import { AuthContext } from "./context/AuthContext";
import { useContext } from "react";

function App() {
  const { user } = useContext(AuthContext);
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={user ? <Home /> : <LoginPage />} />

          <Route path="/login" element={user ? <Home /> : <LoginPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
