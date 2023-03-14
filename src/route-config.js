import Login from "./Login";
import Register from "./Register";

const routes = [
    //Genres
    {
      path: "/login",
      component: Login,
      exact : true
    },
    {
        path: "/register",
        component: Register,
        exact : true
      },
];

export default routes;