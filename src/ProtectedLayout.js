import { Link } from "react-router-dom";
import { Navigate, Outlet } from "react-router-dom";
import { useUserContext } from "./userContext";
import NavBar from "./NavBar2";

export const ProtectedLayout = () => {
  const { user } = useUserContext();

  if (!user) {
    return <Navigate to="/Login" />;
  }
  return (
    <div>
      <NavBar />
      {/* <Link to="/">Home </Link> */}
      <Outlet />
    </div>
  );
};
