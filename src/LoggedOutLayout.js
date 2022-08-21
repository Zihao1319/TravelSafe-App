import { Link } from "react-router-dom";
import { Navigate, Outlet } from "react-router-dom";
import { useUserContext } from "./userContext";

export const LoggedOutLayout = () => {
  const { user } = useUserContext();

  if (user) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      <nav>
        <Link to="/signup">Sign up</Link>
        <Link to="/login">Login</Link>
      </nav>
      <Outlet />
    </div>
  );
};
