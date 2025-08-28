import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { FiHome, FiUser, FiBell } from 'react-icons/fi';

const SideMenu = () => {
  // Use o hook useLocation para obter a rota atual
  const location = useLocation();

  // Rotas onde o menu lateral não deve aparecer
  const pagesNotViewMenu = [
    '/',
    '/login', 
    '/cadastro',
    '/dashboard-se',
    '/alunos-lista-se',
    '/informacoes-aluno-secretaria',
  ];

  // Se a rota atual estiver na lista, não renderize o menu
  if (pagesNotViewMenu.includes(location.pathname)) {
    return null;
  }

  return (
    <aside className="fixed-nav-bar">
      <NavLink 
        to="/dashboard" 
        className={({ isActive }) => 
          "nav-item" + (isActive ? " active" : "")
        }
      >
        <FiHome className="nav-icon" />
        <span className="nav-text">Início</span>
      </NavLink>
      <NavLink 
        to="/notificacoes" 
        className={({ isActive }) => 
          "nav-item" + (isActive ? " active" : "")
        }
      >
        <FiBell className="nav-icon" />
        <span className="nav-text">Notificações</span>
      </NavLink>
      <NavLink 
        to="/perfil" 
        className={({ isActive }) => 
          "nav-item" + (isActive ? " active" : "")
        }
      >
        <FiUser className="nav-icon" />
        <span className="nav-text">Perfil</span>
      </NavLink>
    </aside>
  );
};

export default SideMenu;
