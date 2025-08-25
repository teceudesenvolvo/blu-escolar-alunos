import React from 'react';
import { NavLink } from 'react-router-dom';

const TopMenu = () => {
  return (
    <header className="header">
      <div className="logomarca">Logomarca</div>
      <nav className="header-nav">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/cadastro">Cadastro</NavLink>
      </nav>
    </header>
  );
};

export default TopMenu;
