import "./App.css";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Login from "./login/Login";
import Register from "./register/Register";
import Nav from "./components/Nav";
import Dashboard from "./pages/Dashboard";
import Raports from "./pages/Reports";
import Messages from "./pages/Messages";
import Members from "./pages/Members";
import Settings from "./pages/Settings";
import EditUser from "./user/EditUser/EditUser";
import AddUser from "./user/AddUser/AddUser.jsx";
import ViewUser from "./user/ViewUser/ViewUser.jsx";

function App() {
  return (
    <BrowserRouter>
      {/* <Route path="/" element={<Login/>} />
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/> */}
      <Nav>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/raports" element={<Raports />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/members" index element={<Members />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/users/edit/:userId" element={<EditUser />} />
          <Route path="/user/create" element={<AddUser />} />
          <Route path="/user/view/:userId" element={<ViewUser />} />
        </Routes>
      </Nav>
    </BrowserRouter>
  );
}

export default App;
