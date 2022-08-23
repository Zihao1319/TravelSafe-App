import { Link } from "react-router-dom";
import { Navigate, Outlet } from "react-router-dom";
import { useUserContext } from "./userContext";
import ResponsiveAppBar from "./NavBar";

export const ProtectedLayout = () => {
  const { user } = useUserContext();

  if (!user) {
    return <Navigate to="/Login" />;
  }
  return (
    <div>
      <ResponsiveAppBar />
      {/* <Link to="/">Home </Link> */}
      <Outlet />
    </div>
  );
};
