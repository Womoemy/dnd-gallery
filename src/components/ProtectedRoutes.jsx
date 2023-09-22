import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../contexts/AuthContext";

// eslint-disable-next-line react/prop-types
export function ProtectedRoutes({ children }) {
    const {currentUser} = useContext(Context);

    if(!currentUser) {
        return <Navigate to="/login" replace />
    } else {
        return children;
    }
}