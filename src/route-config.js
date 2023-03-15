import Login from "./Login";
import Register from "./Register";
import EditUser from "./user crud/EditUser/EditUser.jsx"
import UserList from "./user crud/UserList/UserList";
import AddUser from "./user crud/AddUser/AddUser.jsx";
import ViewUser from "./user crud/ViewUser/ViewUser.jsx";

const routes = [
    //Login
    {path: "/login",  element: Login, exact : true },
    
    //Register
    { path: "/register", element: Register, exact : true },
    
    //User CRUD
    { path: "/users/view/:userId", element: EditUser},
    { path: "/users/create", element: AddUser},
    { path: "/users/list", element: UserList},
    { path: "/user", element: ViewUser},
];


export default routes;