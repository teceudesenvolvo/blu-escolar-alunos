import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importa o hook useNavigate
import { FiFileText, FiBook, FiBookOpen, FiUsers, FiPlusCircle, FiEdit, FiSearch } from 'react-icons/fi';
import TeacherImage from '../assets/professora-2.png';

// Dados de exemplo para os cards de estatísticas
const stats = [
    { value: '85%', label: 'Documentação Enviada', icon: <FiFileText />, color: '#F1CC5A' },
    { value: '02', label: 'Alunos', icon: <FiUsers />, color: '#556080' },
    { value: '04', label: 'Material Escolar', icon: <FiBook />, color: '#4C50F5' },
    { value: '15', label: 'Livros', icon: <FiBookOpen />, color: '#8890D0' },
];

// Dados de exemplo para os alunos
const students = [
    {
        name: 'Francisca Fulana Ferreira Nojosa',
        age: 11,
        grade: '5º Ano - Turma A',
        school: 'Nome do Colégio Matricularão',
        status: 'Matriculado',
        avatar: 'https://placehold.co/80x80/F8F9FA/333333?text=Aluno+1'
    },
    {
        name: 'Antonio Fulano Ferreira Nojosa',
        age: 9,
        grade: '4º Ano - Turma C',
        school: 'Nome do Colégio Matricularão',
        status: 'Em Análise',
        avatar: 'https://placehold.co/80x80/F8F9FA/333333?text=Aluno+2'
    }
];

function DashboardPage() {
    const navigate = useNavigate(); // Inicializa o hook de navegação

    // Função para lidar com o clique no botão "Adicionar Aluno"
    const handleAddStudent = () => {
        navigate('/pre-matricula-aluno');
    };

    // Função para lidar com o clique no botão "Editar Aluno"
    const handleEditStudent = (studentName) => {
        // Redireciona para a página de edição, passando o nome do aluno como parâmetro de URL
        navigate(`/aluno-pais-edit`);
    };

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
                    <div key={index} className={`stat-card stat-card-${index}`} >
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

                {/* Lista de Alunos vinda do backend */}
                <div className="student-list">
                    {students.map((student, index) => (
                        <div key={index} className="student-card">
                            <div className="student-info">
                                <div className="student-avatar">
                                    <img src={student.avatar} alt="Student avatar" />
                                </div>
                                <div className="student-details">
                                    {/* Dados básicos do aluno */}
                                    <h3 onClick={() => handleEditStudent(student.name)} >{student.name}</h3>
                                    <p>Idade: {student.age} Anos</p>
                                    <p>{student.grade}</p>
                                    <p>Nome do Colégio Matricularão</p>
                                </div>
                            </div>
                            <div className="student-actions">
                                {/* Status da matricula do aluno */}
                                <span className={`status-badge status-${student.status === 'Matriculado' ? 'matriculado' : 'analise'}`}>
                                    {student.status}
                                </span>
                                {/* Botão para ir para a página de edição com os dados do aluno */}
                                <FiEdit 
                                    className="edit-icon" 
                                    onClick={() => handleEditStudent(student.name)} 
                                />
                            </div>
                        </div>
                    ))}
                </div>

                <div className="add-student-card" onClick={handleAddStudent}>
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
