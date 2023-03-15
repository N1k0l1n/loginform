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
import Members from './pages/Members'
import Settings from './pages/Settings'
import EditUser from "./user crud/EditUser/EditUser";

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
          <Route path="/members" index element={<Members />}/>
          <Route path="/settings" element={<Settings />} />
          <Route path="/users/view/:userId"  element={<EditUser />} />
        </Routes>
      </Nav>
    </BrowserRouter>
  );
}

export default App;
