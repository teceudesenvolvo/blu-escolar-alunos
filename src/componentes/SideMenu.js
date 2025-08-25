import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { FiHome, FiUser, FiSettings } from 'react-icons/fi';

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
        to="/dashboard" 
        className={({ isActive }) => 
          "nav-item" + (isActive ? " active" : "")
        }
      >
        <FiUser className="nav-icon" />
        <span className="nav-text">Dashboard</span>
      </NavLink>
      <NavLink 
        to="/settings" 
        className={({ isActive }) => 
          "nav-item" + (isActive ? " active" : "")
        }
      >
        <FiSettings className="nav-icon" />
        <span className="nav-text">Configurações</span>
      </NavLink>
    </aside>
  );
};

export default SideMenu;
