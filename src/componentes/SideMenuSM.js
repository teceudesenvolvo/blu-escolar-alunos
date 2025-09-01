import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { FiHome, FiUser, FiAward, FiBell } from 'react-icons/fi';

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
        '/se',
        '/alunos-lista-se',
        '/editar-aluno-se',
        '/informacoes-aluno-secretaria'
    ];

    // Se a rota atual estiver na lista, não renderize o menu
    if (pagesNotViewMenu.includes(location.pathname)) {
        return null;
    }

    return (
        <aside className="fixed-nav-bar">
            <NavLink
                to="/sm"
                className={({ isActive }) =>
                    "nav-item" + (isActive ? " active" : "")
                }
            >
                <FiHome className="nav-icon" />
                <span className="nav-text">Início</span>
            </NavLink>
            <NavLink
                to="/escolas-lista-sm"
                className={({ isActive }) =>
                    "nav-item" + (isActive ? " active" : "")
                }
            >
                <FiAward className="nav-icon" />
                <span className="nav-text">Escolas</span>
            </NavLink>
            <NavLink
                to="/enviar-notificacoes-sm"
                className={({ isActive }) =>
                    "nav-item" + (isActive ? " active" : "")
                }
            >
                <FiBell className="nav-icon" />
                <span className="nav-text">Notificacoes</span>
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
