import { Outlet, Navigate } from "react-router-dom";

const useAuth=()=>{
  const user = localStorage.getItem('user')
  if(user){
    return true
  } else {
    return false
  }
}

const PrivateRoutes = () => {
  const auth=useAuth()
  return auth.token ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
