import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import "./Nav.css";
import {
  FaBook,
  FaHome,
  FaMailBulk,
  FaBars,
  FaUser,
  FaWrench,
  FaPowerOff,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Nav = ({ children }) => {

  let navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);


  const logout = () =>{
    window.localStorage.clear();
    navigate("/login");
  }

  const menuItem = [
    {
      path: "/dashboard",
      name: "Dashboard",
      icon: <FaHome />,
    },
    {
      path: "/raports",
      name: "Raports",
      icon: <FaBook />,
    },
    {
      path: "/messages",
      name: "Messages",
      icon: <FaMailBulk />,
    },
    {
      path: "/members",
      name: "Members",
      icon: <FaUser />,
    },
    {
      path: "/settings",
      name: "Settings",
      icon: <FaWrench />,
    },
  ];
  return (
    <div className="container">
      <Outlet />
      <div style={{ width: isOpen ? "200px" : "50px" }} className="sidebar">
        <div className="top_section">
          <img
            alt="logo"
            src={require("../assets/logo_blue_white.png")}
            style={{ display: isOpen ? "block" : "none" }}
            className="logo"
          />
          <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars">
            <FaBars onClick={toggle} />
          </div>
        </div>
        {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="linkss"
            activeclassname="active"
          >
            <div className="icon">{item.icon}</div>
            <div
              style={{ display: isOpen ? "block" : "none" }}
              className="link_text"
            >
              {item.name}
            </div>
          </NavLink>
        ))}
        <button onClick={logout} className="lg-out-btn" ><i className="fas fa-power-off"></i></button>
      </div>
      <main>{children}</main>
      
    </div>
  );
};

export default Nav;
