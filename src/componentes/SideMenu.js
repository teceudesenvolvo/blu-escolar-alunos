import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { FiHome, FiLogIn, FiUserPlus } from 'react-icons/fi';

const SideMenu = () => {
  // Use o hook useLocation para obter a rota atual
  const location = useLocation();

  // Rotas onde o menu lateral não deve aparecer
  const pagesNotViewMenu = ['/login', '/cadastro'];

  // Se a rota atual estiver na lista, não renderize o menu
  if (pagesNotViewMenu.includes(location.pathname)) {
    return null;
  }

  return (
    <aside className="fixed-nav-bar">
      <NavLink 
        to="/" 
        className={({ isActive }) => 
          "nav-item" + (isActive ? " active" : "")
        }
      >
        <FiHome className="nav-icon" />
        <span className="nav-text">Início</span>
      </NavLink>
      <NavLink 
        to="/cadastro" 
        className={({ isActive }) => 
          "nav-item" + (isActive ? " active" : "")
        }
      >
        <FiUserPlus className="nav-icon" />
        <span className="nav-text">Cadastre-se</span>
      </NavLink>
      <NavLink 
        to="/login" 
        className={({ isActive }) => 
          "nav-item" + (isActive ? " active" : "")
        }
      >
        <FiLogIn className="nav-icon" />
        <span className="nav-text">Entrar</span>
      </NavLink>
    </aside>
  );
};

export default SideMenu;
