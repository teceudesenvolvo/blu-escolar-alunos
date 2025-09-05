import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import logoMunicipio from  '../assets/logo-municipio.png'

const TopMenu = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <header className="header">
      <div 
      
      onClick={() => {
        // Condição para verficar o usuário logado
        if(location.pathname !== '/') 
        navigate('/')
      }} 
      
      className="logomarca">
        <img src={logoMunicipio} alt="Município" height="100%"/>
        {/* Município */}
      </div>
    </header>
  );
};

export default TopMenu;
