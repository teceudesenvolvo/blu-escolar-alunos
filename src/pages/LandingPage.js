import React from 'react';
import Person3d from '../../../assets/professora-2.png';

function LandingPage() {
  return (
    <div className="landing-page-container">
      <div className="main-content">
        {/* Aqui irá a seção principal da página, com o conteúdo de destaque e os cards */}
        <section className="hero-section">
          <div className="hero-content">
            <h1>INOVAR E EDUCAR É NOSSA MISSÃO</h1>
            <p>A Secretaria Municipal de Educação inovou mais uma vez, agora conseguimos te ajudar a realizar a matrícula do seu filho sem sair de casa.</p>
          </div>
          <div className="hero-image">
            <img src="https://placehold.co/360x360/E8DFFD/333333?text=3D+character" alt="3D character" />
          </div>
        </section>

        <section className="features-section">
          <div className="feature-card">
            <img src="https://placehold.co/100x100/F1F5FE/333333?text=Books" alt="Books icon" />
            <h3>Criar Nova conta</h3>
            <p>Clique aqui para criar um novo usuário e iniciar o processo de matrícula.</p>
            <a href="/cadastro" className="btn-primary">Criar Nova conta</a>
          </div>
          <div className="feature-card">
            <img src="https://placehold.co/100x100/F1F5FE/333333?text=Open+Book" alt="Open book icon" />
            <h3>Acessar sua conta</h3>
            <p>Clique aqui para acessar o portal com seu usuário e senha.</p>
            <a href="/login" className="btn-secondary">Acessar sua conta</a>
          </div>
          <div className="video-card">
              <h4>Vídeo Explicativo de como usar o portal</h4>
              <div className="video-placeholder">
                <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-play-circle"><circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8"/></svg>
              </div>
          </div>
        </section>

        <section className="info-section">
            <div className="info-text">
                <h2>Prefeitura do Município cria portal de educação que auxilia pais e alunos.</h2>
                <p>A Secretaria Municipal de Educação inovou mais uma vez, agora conseguimos te ajudar a realizar a matrícula do seu filho sem sair de casa.</p>
                <a href="#saiba-mais" className="learn-more-link">Saiba Mais</a>
            </div>
            <div className="info-image">
                <img src="https://placehold.co/400x300/F1F5FE/333333?text=Dashboard" alt="Dashboard preview" />
            </div>
        </section>
        
      </div>
    </div>
  );
}

export default LandingPage;
