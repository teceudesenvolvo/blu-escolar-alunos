import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Dados mockados para simular as escolas
const mockSchools = [
    { id: 1, name: 'Escola Modelo 1', neighborhood: 'Centro', director: 'Diretor Fulano', status: 'Lotada', address: 'Rua Teste do Brasil', number: '101', secretary: 'Fulana de Tal', phone: '85 3232-3232', email: 'email@email.com', totalVacancies: '5.582', occupiedVacancies: '5.583' },
    { id: 2, name: 'Escola Padrão 2', neighborhood: 'Centro', director: 'Diretor Fulano', status: 'Livre', address: 'Rua Teste do Brasil', number: '101', secretary: 'Fulana de Tal', phone: '85 3232-3232', email: 'email@email.com', totalVacancies: '5.582', occupiedVacancies: '5.583' },
    { id: 3, name: 'Escola Exemplo 3', neighborhood: 'Bairro Novo', director: 'Diretor Fulano', status: 'Lotada', address: 'Rua Teste do Brasil', number: '101', secretary: 'Fulana de Tal', phone: '85 3232-3232', email: 'email@email.com', totalVacancies: '5.582', occupiedVacancies: '5.583' },
    { id: 4, name: 'Escola Padrão 4', neighborhood: 'Centro', director: 'Diretor Fulano', status: 'Livre', address: 'Rua Teste do Brasil', number: '101', secretary: 'Fulana de Tal', phone: '85 3232-3232', email: 'email@email.com', totalVacancies: '5.582', occupiedVacancies: '5.583' },
    { id: 5, name: 'Escola Padrão 5', neighborhood: 'Centro', director: 'Diretor Fulano', status: 'Livre', address: 'Rua Teste do Brasil', number: '101', secretary: 'Fulana de Tal', phone: '85 3232-3232', email: 'email@email.com', totalVacancies: '5.582', occupiedVacancies: '5.583' },
    { id: 6, name: 'Escola Padrão 6', neighborhood: 'Centro', director: 'Diretor Fulano', status: 'Livre', address: 'Rua Teste do Brasil', number: '101', secretary: 'Fulana de Tal', phone: '85 3232-3232', email: 'email@email.com', totalVacancies: '5.582', occupiedVacancies: '5.583' },
    { id: 7, name: 'Escola Padrão 7', neighborhood: 'Centro', director: 'Diretor Fulano', status: 'Livre', address: 'Rua Teste do Brasil', number: '101', secretary: 'Fulana de Tal', phone: '85 3232-3232', email: 'email@email.com', totalVacancies: '5.582', occupiedVacancies: '5.583' },
    { id: 8, name: 'Escola Padrão 8', neighborhood: 'Centro', director: 'Diretor Fulano', status: 'Livre', address: 'Rua Teste do Brasil', number: '101', secretary: 'Fulana de Tal', phone: '85 3232-3232', email: 'email@email.com', totalVacancies: '5.582', occupiedVacancies: '5.583' },
    { id: 9, name: 'Escola Padrão 9', neighborhood: 'Centro', director: 'Diretor Fulano', status: 'Livre', address: 'Rua Teste do Brasil', number: '101', secretary: 'Fulana de Tal', phone: '85 3232-3232', email: 'email@email.com', totalVacancies: '5.582', occupiedVacancies: '5.583' },
    { id: 10, name: 'Escola Padrão 10', neighborhood: 'Centro', director: 'Diretor Fulano', status: 'Livre', address: 'Rua Teste do Brasil', number: '101', secretary: 'Fulana de Tal', phone: '85 3232-3232', email: 'email@email.com', totalVacancies: '5.582', occupiedVacancies: '5.583' },
    { id: 11, name: 'Escola Padrão 11', neighborhood: 'Centro', director: 'Diretor Fulano', status: 'Livre', address: 'Rua Teste do Brasil', number: '101', secretary: 'Fulana de Tal', phone: '85 3232-3232', email: 'email@email.com', totalVacancies: '5.582', occupiedVacancies: '5.583' }


];

const SchoolListPage = () => {
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState({
        name: '',
        neighborhood: '',
        director: '',
        status: ''
    });

    const handleSearchChange = (e) => {
        const { name, value } = e.target;
        setSearchQuery(prev => ({ ...prev, [name]: value }));
    };

    const filteredSchools = mockSchools.filter(school => {
        const matchesName = school.name.toLowerCase().includes(searchQuery.name.toLowerCase());
        const matchesNeighborhood = school.neighborhood.toLowerCase().includes(searchQuery.neighborhood.toLowerCase());
        const matchesDirector = school.director.toLowerCase().includes(searchQuery.director.toLowerCase());
        const matchesStatus = school.status.toLowerCase().includes(searchQuery.status.toLowerCase());
        return matchesName && matchesNeighborhood && matchesDirector && matchesStatus;
    });

    const handleAddSchoolClick = () => {
        navigate('/adicionar-escola-sm');
    };

    const handleEditSchoolClick = (schoolId) => {
        navigate(`/editar-escola-sm/${schoolId}`);
    };

    const getStatusColorClass = (status) => {
        switch (status) {
            case 'Livre':
                return 'sm-status-available';
            case 'Lotada':
                return 'sm-status-listed';
            default:
                return '';
        }
    };

    return (
        <div className="sm-school-page-container">
            {/* Título e contador */}
            <div className="sm-header-info">
                <h1 className="sm-title">Escolas do Município</h1>
                <span className="sm-count">Quantidade de Escolas: {filteredSchools.length}</span>
            </div>

            {/* Inputs de pesquisa */}
            <div className="sm-search-inputs-grid">
                <div className="sm-input-group">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="sm-search-icon"><path d="M10.5 4.5a6 6 0 100 12 6 6 0 000-12zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.63 4.63a.75.75 0 01-1.06 1.06l-4.63-4.63A8.25 8.25 0 012.25 10.5z" /></svg>
                    <input type="text" placeholder="Nome da Escola" name="name" value={searchQuery.name} onChange={handleSearchChange} />
                </div>
                <div className="sm-input-group">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="sm-search-icon"><path d="M10.5 4.5a6 6 0 100 12 6 6 0 000-12zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.63 4.63a.75.75 0 01-1.06 1.06l-4.63-4.63A8.25 8.25 0 012.25 10.5z" /></svg>
                    <input type="text" placeholder="Bairro" name="neighborhood" value={searchQuery.neighborhood} onChange={handleSearchChange} />
                </div>
                <div className="sm-input-group">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="sm-search-icon"><path d="M10.5 4.5a6 6 0 100 12 6 6 0 000-12zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.63 4.63a.75.75 0 01-1.06 1.06l-4.63-4.63A8.25 8.25 0 012.25 10.5z" /></svg>
                    <input type="text" placeholder="Diretor" name="director" value={searchQuery.director} onChange={handleSearchChange} />
                </div>
                <div className="sm-input-group">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="sm-search-icon"><path d="M10.5 4.5a6 6 0 100 12 6 6 0 000-12zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.63 4.63a.75.75 0 01-1.06 1.06l-4.63-4.63A8.25 8.25 0 012.25 10.5z" /></svg>
                    <input type="text" placeholder="Situação" name="status" value={searchQuery.status} onChange={handleSearchChange} />
                </div>
            </div>

            {/* Grid de Cards */}
            <div className="sm-school-cards-grid">
                {/* Card para adicionar nova escola */}
                <div className="sm-add-school-card" onClick={handleAddSchoolClick}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="sm-add-icon"><path d="M12 4.5a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V5.25a.75.75 0 01.75-.75z" /></svg>
                    <span>Adicionar Escola</span>
                </div>

                {/* Cards das escolas */}
                {filteredSchools.map(school => (
                    <div key={school.id} className="sm-school-card">
                        <div className="sm-card-header">
                            <h3 className="sm-card-title">{school.name}</h3>
                            <span className={`sm-status-tag ${getStatusColorClass(school.status)}`}>{school.status}</span>
                        </div>
                        <div className="sm-card-details">
                            <p><strong>Bairro:</strong> {school.neighborhood}</p>
                            <p><strong>Endereço:</strong> {school.address}</p>
                            <p><strong>Número:</strong> {school.number}</p>
                            <p><strong>Diretor:</strong> {school.director}</p>
                            <p><strong>Secretário:</strong> {school.secretary}</p>
                            <p><strong>Telefone:</strong> {school.phone}</p>
                            <p><strong>Email:</strong> {school.email}</p>
                            <p><strong>Total de Vagas:</strong> {school.totalVacancies}</p>
                            <p><strong>Vagas Ocupadas:</strong> {school.occupiedVacancies}</p>
                        </div>
                        <button className="sm-edit-btn" onClick={() => handleEditSchoolClick(school.id)}>Clique para editar</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SchoolListPage;
