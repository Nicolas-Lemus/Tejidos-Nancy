import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import Menu from '../../images/icons82.png'
import Logo from '../../images/logo.png'

function NavBar() {
  const [click, setClick] = useState(false);


  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            <i className="fas fa-code logotipo"><img src={Logo} alt="Logo-empresa"/></i>
          </NavLink>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/Tejidos"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Tejidos
              </NavLink>

            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/SobreMi"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Sobre Mi
              </NavLink>

            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/Contactos"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Contactos
              </NavLink>

            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
          <img className="position-logo" src={Menu} alt="#"/>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;