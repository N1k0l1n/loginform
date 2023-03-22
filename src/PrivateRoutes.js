import { Outlet, Navigate } from "react-router-dom";
import Nav from "./components/Nav";
import axios from "axios";
import { useEffect, useState } from "react";


const PrivateRoutes = () => {

    const token = localStorage.getItem('token');
 
    return(
    token ? <Nav /> : <Navigate to="/login" />
    );
};


export default PrivateRoutes;
