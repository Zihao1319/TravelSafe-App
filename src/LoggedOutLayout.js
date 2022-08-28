import { Link } from "react-router-dom";
import { Navigate, Outlet } from "react-router-dom";
import { useUserContext } from "./userContext";
import NavBar2 from "./NavBar2";
import ResponsiveAppBar from "./NavBar";

export const LoggedOutLayout = () => {
  const { user } = useUserContext();

  if (user) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      {/* <NavBar2 />
      <ResponsiveAppBar /> */}

      {/* <Link to="/signup">Sign up</Link>
      <Link to="/login">Login</Link> */}
      {/* </nav> */}
      <Outlet />
    </div>
  );
};
