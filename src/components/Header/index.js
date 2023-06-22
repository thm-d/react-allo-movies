import React, { useState } from 'react';
import { Link, NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchMovies } from "store/movies/actions";
import { HeaderMenu } from "components/Header/HeaderMenu";
import style from "./index.module.scss";


export const Header = () => {
  const dispatch = useDispatch();
  const [ showMenu, setShowMenu ] = useState(false);

  return (
    <header className="navbar navbar-expand-lg navbar-dark bg-dark position-relative">
      <div className={ `${ style.gitLogo }` }>
          <Link to="/" className="navbar-brand mr-0" onClick={ () => {
            dispatch(fetchMovies());
          } }
          >AlloMovies</Link>
          <a href="https://github.com/thm-d/react-allo-movies" className="nav-link" target="_blank"><i
            className="fa-brands fa-github fa-xl"
          ></i></a>
      </div>
      <div className={ `collapse navbar-collapse ${ style.headerList }` }>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item li">
            <NavLink end to="/" className="nav-link">Home</NavLink>
          </li>
          <li className="nav-item li">
            <NavLink to="/favoris" className="nav-link">Favoris</NavLink>
          </li>
        </ul>
      </div>
      <button className={ `navbar-toggler ${ style.headerMdLt }` }
              onClick={ () => setShowMenu(true) }
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      { showMenu && (
        <>
          <div onClick={ () => setShowMenu(false) } className="calc"></div>
          <HeaderMenu/>
        </>
      ) }

    </header>
  );
};