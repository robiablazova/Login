import { Link, Route,  Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/user/Login";
import Logout from "./components/user/Logout";
import { useSelector } from "react-redux";

function App() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return <div>{isAuthenticated ? <Logout /> : <Login />}</div>;
}

export default App;
