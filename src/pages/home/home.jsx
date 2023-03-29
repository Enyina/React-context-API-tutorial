import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const Home = () => {
  const { logout } = useContext(AuthContext);
  return (
    <div>
      <h1>success</h1>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Home;
