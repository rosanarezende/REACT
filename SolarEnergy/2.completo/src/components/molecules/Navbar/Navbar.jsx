import "./Navbar.css";
import React from "react";
import { Link, useLocation } from "react-router-dom";

import logo from "../../../assets/logo.svg";
import { ReactComponent as Dashboard } from "../../../assets/dashboard.svg";
import { ReactComponent as UnidadeConsumidora } from "../../../assets/unidade-consumidora.svg";
import { ReactComponent as CadastroEnergiaGerada } from "../../../assets/cadastro-energia-gerada.svg";

export default function Navbar() {
  const location = useLocation();

  const isSelected = (pathname) => {
    return location.pathname === pathname ? "selected" : "";
  };

  const links = [
    {
      path: "/",
      label: "Dashboard",
      icon: <Dashboard />,
    },
    {
      path: "/unidades",
      label: "Unidade Consumidora",
      icon: <UnidadeConsumidora />,
    },
    {
      path: "/cadastro",
      label: "Cadastro de Energia Gerada",
      icon: <CadastroEnergiaGerada />,
    },
  ]

  return (
    <nav className="menu">
      <Link to="/">
        <img src={logo} alt="Solar Energy logo" />
      </Link>

      <ul>
        {links.map((link) => (
          <li className={isSelected(link.path)} key={link.path}>
            <Link to={link.path}>
              {link.icon}
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
