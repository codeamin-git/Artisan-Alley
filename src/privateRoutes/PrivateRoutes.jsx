import { Navigate } from "react-router-dom";
import Loading from "../components/Loading/Loading";
import useAuth from "../hooks/useAuth";

const PrivateRoutes = ({children}) => {
    const {user, loading} = useAuth()
    if(loading){
        return <Loading></Loading>
    }
    if(!user){
        return <Navigate to='/login' state={location?.pathname || '/'} ></Navigate>
    }
    return (
        <div>
            {children}
        </div>
    );
};

export default PrivateRoutes;