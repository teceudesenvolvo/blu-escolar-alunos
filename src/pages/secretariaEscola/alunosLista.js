import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 

const StudentSearchPage = () => {
    // Estado para controlar a aba de série, turma e status
    const [activeSeries, setActiveSeries] = useState('1º');
    const [activeClass, setActiveClass] = useState('A');
    const [activeStatus, setActiveStatus] = useState('Matrículas');

    // Dados mockados para os alunos
    const students = [
        {
            status: 'Aprovada',
            name: 'Antonio da Silva Sampaio Correia',
            matricula: '2025101112',
            cpf: '123.123.123-55',
            rg: '2022212',
            birthDate: '10/11/2005',
            motherName: 'Fulana de Tal',
            fatherName: 'Fulano de Tal',
            naturalidade: 'Fortaleza',
            nacionalidade: 'Brasileiro'
        },
         {
            status: 'Aprovada',
            name: 'Antonio da Silva Sampaio Correia',
            matricula: '2025101112',
            cpf: '123.123.123-55',
            rg: '2022212',
            birthDate: '10/11/2005',
            motherName: 'Fulana de Tal',
            fatherName: 'Fulano de Tal',
            naturalidade: 'Fortaleza',
            nacionalidade: 'Brasileiro'
        },
         {
            status: 'Pendente',
            name: 'Antonio da Silva Sampaio Correia',
            matricula: '2025101112',
            cpf: '123.123.123-55',
            rg: '2022212',
            birthDate: '10/11/2005',
            motherName: 'Fulana de Tal',
            fatherName: 'Fulano de Tal',
            naturalidade: 'Fortaleza',
            nacionalidade: 'Brasileiro'
        },
         {
            status: 'Em Analise',
            name: 'Antonio da Silva Sampaio Correia',
            matricula: '2025101112',
            cpf: '123.123.123-55',
            rg: '2022212',
            birthDate: '10/11/2005',
            motherName: 'Fulana de Tal',
            fatherName: 'Fulano de Tal',
            naturalidade: 'Fortaleza',
            nacionalidade: 'Brasileiro'
        },
        
    ];

    // Função para determinar a classe de cor com base no status
    const getStatusColorClass = (status) => {
        switch (status) {
            case 'Aprovada':
                return 'se-status-approved';
            case 'Pendente':
                return 'se-status-pending';
            case 'Em Analise':
                return 'se-status-analyzing';
            default:
                return '';
        }
    };
    const navigate = useNavigate();
    return (
        <div className="se-search-page-container">
            {/* Título e quantidade de matrículas */}
            <div className="se-header-info">
                <h1 className="se-title">Matrículas Realizadas</h1>
                <span className="se-count">Quantidade de Matrículas: 146</span>
            </div>

            {/* Seção de Filtros */}
            <div className="se-filter-section">
                <h2 className="se-filter-title">Filtros</h2>
                {/* Filtros de Série */}
                <div className="se-filter-group se-series-filters">
                    {['1º', '2º', '3º', '4º', '5º', '6º', '7º', '8º', '9º'].map(series => (
                        <button
                            key={series}
                            className={`se-filter-btn ${activeSeries === series ? 'active' : ''}`}
                            onClick={() => setActiveSeries(series)}
                        >
                            {series}
                        </button>
                    ))}
                </div>

                {/* Filtros de Turma */}
                <div className="se-filter-group se-class-filters">
                    {['A', 'B', 'C', 'D', 'E', 'F'].map(className => (
                        <button
                            key={className}
                            className={`se-filter-btn ${activeClass === className ? 'active' : ''}`}
                            onClick={() => setActiveClass(className)}
                        >
                            {className}
                        </button>
                    ))}
                </div>

                {/* Filtros de Status da Matrícula */}
                <div className="se-filter-group se-status-filters">
                    {['Matrículas', 'Matrículas Pendentes', 'Matrículas Aprovadas', 'Matrículas em Análise'].map(status => (
                        <button
                            key={status}
                            className={`se-filter-btn se-status-btn ${activeStatus === status ? 'active' : ''}`}
                            onClick={() => setActiveStatus(status)}
                        >
                            {status}
                        </button>
                    ))}
                </div>
            </div>

            {/* Campos de Pesquisa */}
            <div className="se-search-inputs">
                <div className="se-input-group">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="se-search-icon"><path d="M10.5 4.5a6 6 0 100 12 6 6 0 000-12zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.63 4.63a.75.75 0 01-1.06 1.06l-4.63-4.63A8.25 8.25 0 012.25 10.5z" /></svg>
                    <input type="text" placeholder="Nome do Aluno" />
                </div>
                <div className="se-input-group">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="se-search-icon"><path d="M10.5 4.5a6 6 0 100 12 6 6 0 000-12zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.63 4.63a.75.75 0 01-1.06 1.06l-4.63-4.63A8.25 8.25 0 012.25 10.5z" /></svg>
                    <input type="text" placeholder="CPF" />
                </div>
                <div className="se-input-group">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="se-search-icon"><path d="M10.5 4.5a6 6 0 100 12 6 6 0 000-12zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.63 4.63a.75.75 0 01-1.06 1.06l-4.63-4.63A8.25 8.25 0 012.25 10.5z" /></svg>
                    <input type="text" placeholder="Nome da Mãe" />
                </div>
                <div className="se-input-group">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="se-search-icon"><path d="M10.5 4.5a6 6 0 100 12 6 6 0 000-12zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.63 4.63a.75.75 0 01-1.06 1.06l-4.63-4.63A8.25 8.25 0 012.25 10.5z" /></svg>
                    <input type="text" placeholder="Número de Matrícula" />
                </div>
            </div>

            {/* Seção de Cards de Alunos */}
            <div className="se-student-cards-grid">
                {/* Card para adicionar novo aluno */}
                <div className="se-add-student-card">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="se-add-icon"><path d="M12 4.5a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V5.25a.75.75 0 01.75-.75z" /></svg>
                    <span>Adicionar Novo Aluno</span>
                </div>

                {/* Cards de alunos */}
                {students.map((student, index) => (
                    <div key={index} className="se-student-card" onClick={() => navigate('/informacoes-aluno-secretaria')}>
                        <div className="se-card-header">
                            <h3 className="se-card-title">{student.name}</h3>
                            <span className={`se-status-tag ${getStatusColorClass(student.status)}`}>{student.status}</span>
                        </div>
                        <div className="se-card-details">
                            <p><strong>Matrícula:</strong> {student.matricula}</p>
                            <p><strong>CPF:</strong> {student.cpf}</p>
                            <p><strong>RG:</strong> {student.rg}</p>
                            <p><strong>Data de Nascimento:</strong> {student.birthDate}</p>
                            <p><strong>Nome da Mãe:</strong> {student.motherName}</p>
                            <p><strong>Nome do Pai:</strong> {student.fatherName}</p>
                            <p><strong>Naturalidade:</strong> {student.naturalidade}</p>
                            <p><strong>Nacionalidade:</strong> {student.nacionalidade}</p>
                        </div>
                        <button className="se-details-btn">Clique para ver detalhes</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default StudentSearchPage;
