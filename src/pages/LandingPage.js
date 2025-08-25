import React from 'react';
import Person3d from '../assets/teacher.webp';
import Books1 from '../assets/books-1.png';
import Books2 from '../assets/books-2.webp';

function LandingPage() {
    return (
        <div className="landing-page-container">
            <div className="main-content">
                {/* Aqui irá a seção principal da página, com o conteúdo de destaque e os cards */}
                <section className="hero-section">
                    <div className="hero-content">
                        <p>A Secretaria Municipal de Educação inovou mais uma vez, agora conseguimos te ajudar a realizar a matrícula do seu filho sem sair de casa.</p>
                        <h1><b>INOVAR E EDUCAR</b> É NOSSA <b>MISSÃO</b></h1>
                    </div>
                    <div className="hero-image">
                        <img src={Person3d} alt="3D character" />
                    </div>
                </section>

                <section className="features-section">
                    <a href='/cadastro' className="feature-card"a>
                        <div className="icon-container-1">
                            <img src={Books1} alt="Books icon" />
                        </div>
                        <div className='text-card'>
                            <h3>Criar Nova conta</h3>
                            <p>Clique aqui para criar um novo usuário e iniciar o processo de matrícula.</p>
                        </div>
                    </a>
                    <a href='/login' className="feature-card">
                        <div className="icon-container-2">
                            <img src={Books2} alt="Open book icon" />
                        </div>
                        <div className='text-card'>
                            <h3>Acessar sua conta</h3>
                            <p>Clique aqui para acessar o portal com seu usuário e senha.</p>
                        </div>
                    </a>
                    <div className="video-card">
                        <div className="video-placeholder">
                            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="500" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-play-circle"><circle cx="12" cy="12" r="10" /><polygon points="10 8 16 12 10 16 10 8" /></svg>
                        </div>
                    </div>
                </section>

                <section className="info-section">
                    <div className="info-text">
                        <p>Inovação</p>
                        <h2>Prefeitura do Município cria portal de educação que auxilia pais e alunos.</h2>
                        <p>A Secretaria Municipal de Educação inovou mais uma vez, agora conseguimos te ajudar a realizar a matrícula do seu filho sem sair de casa.</p>
                        <a href="#saiba-mais" className="learn-more-link">Saiba Mais</a>
                    </div>
                    <div className="info-image">
                        <img src="https://placehold.co/600x400/F1F5FE/333333?text=Dashboard" alt="Dashboard preview" />
                    </div>
                </section>

            </div>
        </div>
    );
}

export default LandingPage;
