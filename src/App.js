import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

// Importa as páginas completas que serão renderizadas pelas rotas
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import CadastroPage from './pages/CadastroPage';
import DashboardPage from './pages/DashboardPage';


// Componentes Fixos
import SideMenu from './componentes/SideMenu';
import TopMenu from './componentes/TopMenu';
import Footer from './componentes/Footer';

function App() {
  return (
    <BrowserRouter>
      <TopMenu />
      <SideMenu />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/cadastro" element={<CadastroPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
      <Footer />
      <div className="footer-bottom">
        <p>Desenvolvido por Blu Tecnologias</p>
      </div>
    </BrowserRouter>
  );
}

export default App;
