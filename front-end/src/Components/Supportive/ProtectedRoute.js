import React from "react";
import {Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = (props) => {
    return props.auth ? <Outlet/> : <Navigate to='/sign-in' />; 
}

export default ProtectedRoute; 