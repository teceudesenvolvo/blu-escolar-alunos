import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

// Importa as páginas completas que serão renderizadas pelas rotas
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import CadastroPage from './pages/CadastroPage';

import DashboardPage from './pages/DashboardPage';
import Perfil from './pages/Perfil';
import Notificacoes from './pages/Notificacoes';
import AddStudentPage from './pages/AdicionarAluno';
import EditStudentPage from './pages/EditarAluno';

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
        {/* Without Login */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/cadastro" element={<CadastroPage />} />
        
        {/* With Login */}
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/notificacoes" element={<Notificacoes />} />
        <Route path="/pre-matricula-aluno" element={<AddStudentPage />} />
        <Route path="/editar-aluno" element={<EditStudentPage />} />  

      </Routes>
      <Footer />
      <div className="footer-bottom">
        <p>Desenvolvido por Blu Tecnologias</p>
      </div>
    </BrowserRouter>
  );
}

export default App;
