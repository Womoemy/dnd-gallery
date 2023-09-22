import { Navigate } from "react-router-dom";
// import { useContext } from "react";
// import { Context } from "../contexts/AuthContext";
import { useAuth } from '../hooks/useAuth';

// eslint-disable-next-line react/prop-types
export function ProtectedRoutes({children}) {
    // const {currentUser} = useContext(Context);
    const {token} = useAuth();
    
    if(token === null) {
        return <Navigate to="/login" replace={true} />
    }  else {
        // console.log(children);
        return children;
    }
}