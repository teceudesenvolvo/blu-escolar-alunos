import React from 'react';
import { FiFileText, FiBook, FiBookOpen, FiUsers, FiPlusCircle, FiEdit, FiSearch } from 'react-icons/fi';
import TeacherImage from '../assets/professora-2.png';



// Dados de exemplo para os cards de estatísticas
const stats = [
    { value: '85%', label: 'Documentação Enviada', icon: <FiFileText />, color: '#F1CC5A' },
    { value: '02', label: 'Alunos', icon: <FiUsers />, color: '#556080' },
    { value: '04', label: 'Material Escolar', icon: <FiBook />, color: '#4C50F5' },
    { value: '15', label: 'Livros', icon: <FiBookOpen />, color: '#8890D0' },
];

function DashboardPage() {
    return (
        <div className="dashboard-container">
           

            <section className="dashboard-hero">
                <div className="hero-text">
                    <h1>Olá, Nome Sobrenome</h1>
                    <p>Como você está? Vamos iniciar nossas atividades no portal.</p>
                </div>
                <div className="hero-image">
                    <img src={TeacherImage} alt="Teacher character" />
                </div>
            </section>

            <section className="stats-cards">
                {stats.map((stat, index) => (
                    <div key={index} className={`stat-card stat-card-${index}`}>
                        <div className="stat-icon-wrapper">
                            {stat.icon}
                        </div>
                        <div className="stat-content">
                            <span>{stat.value}</span>
                            <p>{stat.label}</p>
                        </div>
                    </div>
                ))}
            </section>

            <section className="students-section">
                <div className="students-header">
                    <h2>Alunos</h2>
                    <div className="search-bar">
                        <FiSearch />
                        <input type="text" placeholder="Pesquisar Aluno" />
                    </div>
                </div>

                <div className="student-list">
                    <div className="student-card">
                        <div className="student-info">
                            <div className="student-avatar">
                                <img src="https://placehold.co/80x80/F8F9FA/333333?text=Aluno" alt="Student avatar" />
                            </div>
                            <div className="student-details">
                                <h3>Francisca Fulana Ferreira Nojosa</h3>
                                <p>Idade: 11 Anos</p>
                                <p>5º Ano - Turma A</p>
                                <p>Nome do Colégio Matricularão</p>
                            </div>
                        </div>
                        <div className="student-actions">
                            <span className="status-badge status-matriculado">Matriculado</span>
                            <FiEdit className="edit-icon" />
                        </div>
                    </div>

                    <div className="student-card">
                        <div className="student-info">
                            <div className="student-avatar">
                                <img src="https://placehold.co/80x80/F8F9FA/333333?text=Aluno" alt="Student avatar" />
                            </div>
                            <div className="student-details">
                                <h3>Antonio Fulano Ferreira Nojosa</h3>
                                <p>Idade: 9 Anos</p>
                                <p>4º Ano - Turma C</p>
                                <p>Nome do Colégio Matricularão</p>
                            </div>
                        </div>
                        <div className="student-actions">
                            <span className="status-badge status-analise">Em Análise</span>
                            <FiEdit className="edit-icon" />
                        </div>
                    </div>
                </div>

                <div className="add-student-card">
                    <div className="add-icon-wrapper">
                        <FiPlusCircle />
                    </div>
                    <h4>Adicionar Novo Aluno</h4>
                    <p>Somente insira alunos de sua responsabilidade</p>
                </div>
            </section>
        </div>
    );
}

export default DashboardPage;
