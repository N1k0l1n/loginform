import React, { useState } from 'react';
import "./Nav.css"
import {
  FaBook,
  FaHome,
  FaMailBulk,
  FaBars,
  FaUser,
  FaWrench
}from "react-icons/fa";
  import {NavLink} from "react-router-dom";

const Nav = ({children}) => {
  const[isOpen ,setIsOpen] = useState(false);
  const toggle = () => setIsOpen (!isOpen);
  const menuItem = [
    {
      path:"/dashboard",
      name:"Dashboard",
      icon:<FaHome/>
    },
    {
      path:"/raports",
      name:"Raports",
      icon:<FaBook/>
    },
    {
      path:"/messages",
      name:"Messages",
      icon:<FaMailBulk/>
    },
    {
      path:"/members",
      name:"Members",
      icon:<FaUser/>
    },
    {
      path:"/settings",
      name:"Settings",
      icon: <FaWrench/>
    },
    
  ]
  return (
    <div className="container">
    <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
        <div className="top_section">
            <img src={require('../assets/logo_blue_white.png')} style={{display: isOpen ? "block" : "none"}} className="logo"/>
            <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                <FaBars onClick={toggle}/>
            </div>
        </div>
        {
            menuItem.map((item, index)=>(
                <NavLink to={item.path} key={index} className="link" activeclassname="active">
                    <div className="icon">{item.icon}</div>
                    <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                </NavLink>
            ))
        }
    </div>
    <main>{children}</main>
 </div>
  );
};

export default Nav;
