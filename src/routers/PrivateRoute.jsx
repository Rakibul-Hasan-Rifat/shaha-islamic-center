import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) return (
        <div className="flex justify-center">
            <span className="loading loading-bars loading-lg"></span>
        </div>
    )

    if (user) return children;

    return <Navigate to='/login' state={location.pathname} />
};

export default PrivateRoute;