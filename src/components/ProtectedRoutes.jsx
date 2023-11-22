import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

// eslint-disable-next-line react/prop-types
export function ProtectedRoutes({ children }) {
  const { token } = useAuth();

  if (token === null) {
    return <Navigate to="/login" replace={true} />;
  } else {
    return children;
  }
}
