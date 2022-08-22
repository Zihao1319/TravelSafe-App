import { Link } from "react-router-dom";
import { Navigate, Outlet } from "react-router-dom";
import { useUserContext } from "./userContext";

export const ProtectedLayout = () => {
  const { user } = useUserContext();

  if (!user) {
    return <Navigate to="/Login" />;
  }
  return (
    <div>
      <nav>
        <Link to="/">Home </Link>
      </nav>
      <Outlet />
    </div>
  );
};
