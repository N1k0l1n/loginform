import { Outlet, Navigate } from "react-router-dom";
import Nav from "./components/Nav";


const PrivateRoutes = () => {
    let auth ={'token': false}
    return(
    auth.token ? <Nav /> : <Navigate to="/login" />
    );
};

export default PrivateRoutes;
