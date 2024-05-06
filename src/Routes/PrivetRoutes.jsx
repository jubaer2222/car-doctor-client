import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivetRoutes = ({children}) => {

    const {user,loading}=useContext(AuthContext);
    const location = useLocation();
    console.log(location.pathname)

    if (loading){
        return <span className=" loading loading-spinner loading-sm"></span>
    }
    if (user){
        return children
    }


    return (
        <div>
            <Navigate state={location.pathname} to="/login">
            
            </Navigate>
        </div>
    );
};

export default PrivetRoutes;