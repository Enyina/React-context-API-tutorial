import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/login/login";
import Home from "./pages/home/home";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
