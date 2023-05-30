import style from './index.module.scss';
import { NavLink } from "react-router-dom";
import React from "react";

export const HeaderMenu = () => (
  <ul className={ `${ style.MenuContainer } p-3` }>
    <NavLink end to="/" className="nav-link">Home</NavLink>
    <NavLink end to="/favoris" className="nav-link">Favoris</NavLink>
  </ul>
);