import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Header.module.css";
import { ReactComponent as Car } from "../Assets/car.svg";
import { ReactComponent as Home } from "../Assets/home.svg";
import { ReactComponent as Search } from "../Assets/search.svg";
import { ReactComponent as User } from "../Assets/user.svg";

const Header = () => {
  return (
    <header>
      <nav className={style.nav}>
        <NavLink className={style.link} to="/" aria-label="Entre Amigos - Home">
          <Home className={style.svg} />
        </NavLink>
        <NavLink
          className={style.link}
          to="/pesquisa"
          aria-label="Entre Amigos - Pesquisa"
        >
          <Search className={style.svg} />
        </NavLink>
        <NavLink
          className={style.link}
          to="/pedidos"
          aria-label="Entre Amigos - Pedido"
        >
          <Car className={style.svg} />
        </NavLink>
        <NavLink
          className={style.link}
          to="/login"
          aria-label="Entre Amigos - Perfil"
        >
          <User className={style.svg} />
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
