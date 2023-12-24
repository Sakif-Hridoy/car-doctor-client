import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { AuthContext } from '../providers/AuthProviders';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext)
    const location = useLocation();
    console.log(location.pathname)
    if(loading){
        return <span className="loading loading-spinner loading-lg"></span>
    }
    if(user?.email){
        return children;
    }
    return <Navigate state={location.pathname} to="/login"></Navigate>
};

PrivateRoute.propTypes = {
    
};

export default PrivateRoute;