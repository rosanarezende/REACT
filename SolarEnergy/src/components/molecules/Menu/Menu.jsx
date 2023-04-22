import "./Menu.css";
import React from "react";
import { Link, useLocation } from "react-router-dom";

import Logo from "../../../assets/logo.svg";
import Dashboard from "../../../assets/dashboard.svg";
import UnidadeConsumidora from "../../../assets/unidade-consumidora.svg";
import CadastroEnergiaGerada from "../../../assets/cadastro-energia-gerada.svg";

const Menu = () => {
  const location = useLocation();

  const isSelected = (pathname) => {
    return location.pathname === pathname ? "selected" : "";
  };

  return (
    <nav className="menu">
      <Link to="/">
        <Logo />
      </Link>

      <ul>
        <li className={isSelected("/")}>
          <Link to="/">
            <Dashboard />
            Dashboard
          </Link>
        </li>
        <li className={isSelected("/unidades-consumidoras")}>
          <Link to="/unidades-consumidoras">
            <UnidadeConsumidora />
            Unidade Consumidora
          </Link>
        </li>
        <li className={isSelected("/cadastro-energia-gerada")}>
          <Link to="/cadastro-energia-gerada">
            <CadastroEnergiaGerada />
            Cadastro de Energia Gerada
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
