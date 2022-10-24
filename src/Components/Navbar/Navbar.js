import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      {/* to, style, className, state sont des props ajoutées au composant */}
      {/* Si le end prop est utilisé, il s'assurera que ce composant n'est pas mis en correspondance comme "actif" lorsque ses chemins descendants sont mis en correspondance. */}
      <NavLink
        to="/" end
        // style={(isActive) => {
        //   return isActive ? {color:"maroon"} : {color:"blue"}
        // }}
        className={({ isActive }) => {
          return isActive ? "activeLink" : undefined;
        }}
      >
        Accueil
      </NavLink>
      <NavLink
        to="/services"
        className={({ isActive }) => {
          return isActive ? "activeLink" : undefined;
        }}
      >
        Services
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) => {
          return isActive ? "activeLink" : undefined;
        }}
      >
        Contact
      </NavLink>
    </nav>
  );
}
