import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { FiHome, FiUser, FiUserCheck } from 'react-icons/fi';

const SideMenu = () => {
    // Use o hook useLocation para obter a rota atual
    const location = useLocation();

    // Rotas onde o menu lateral não deve aparecer
    const pagesNotViewMenu = [
        '/',
        '/login',
        '/cadastro',
        '/dashboard',
        '/notificacoes',
        '/perfil',  
        '/pre-matricula-aluno',
        '/editar-aluno',
    ];

    // Se a rota atual estiver na lista, não renderize o menu
    if (pagesNotViewMenu.includes(location.pathname)) {
        return null;
    }

    return (
        <aside className="fixed-nav-bar">
            <NavLink
                to="/dashboard-se"
                className={({ isActive }) =>
                    "nav-item" + (isActive ? " active" : "")
                }
            >
                <FiHome className="nav-icon" />
                <span className="nav-text">Início</span>
            </NavLink>
            <NavLink
                to="/alunos-lista-se"
                className={({ isActive }) =>
                    "nav-item" + (isActive ? " active" : "")
                }
            >
                <FiUserCheck className="nav-icon" />
                <span className="nav-text">Alunos</span>
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
