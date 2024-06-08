import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate } from "react-router-dom";
import PropTypes from 'prop-types';

 
const PrivateRouter = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    if(loading){
        return <span className="loading loading-bars loading-md"></span>
    }
    if(user){
        return children;
    }
    return <Navigate to='/login'>Login</Navigate>
};

PrivateRouter.propTypes = {
    children: PropTypes.node,
}

export default PrivateRouter;