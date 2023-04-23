import "./Menu.css";
import React from "react";
import { Link, useLocation } from "react-router-dom";

import logo from "../../../assets/logo.svg";
import { ReactComponent as Dashboard } from "../../../assets/dashboard.svg";
import { ReactComponent as UnidadeConsumidora } from "../../../assets/unidade-consumidora.svg";
import { ReactComponent as CadastroEnergiaGerada } from "../../../assets/cadastro-energia-gerada.svg";

const Menu = () => {
  const location = useLocation();

  const isSelected = (pathname) => {
    return location.pathname === pathname ? "selected" : "";
  };

  return (
    <nav className="menu">
      <Link to="/">
        <img src={logo} alt="Solar Energy logo" />
      </Link>

      <ul>
        <li className={isSelected("/")}>
          <Link to="/">
            <Dashboard />
            Dashboard
          </Link>
        </li>
        <li className={isSelected("/unidades")}>
          <Link to="/unidades">
            <UnidadeConsumidora />
            Unidade Consumidora
          </Link>
        </li>
        <li className={isSelected("/cadastro")}>
          <Link to="/cadastro">
            <CadastroEnergiaGerada />
            Cadastro de Energia Gerada
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
