import React, { useState } from 'react';

const StudentProfile = () => {
    // Dados mockados para o aluno
    const [studentData, setStudentData] = useState({
        name: 'Nome do Aluno',
        enrollment: '2025101010',
        photo: 'https://placehold.co/100x100/A0E7E5/000000?text=Foto', // URL de imagem de placeholder
        status: 'Pendente',
        pendencies: [
            'Certidão de Casamento Pendente',
            'Comprovante de Endereço Pendente',
            'Comprovante de Renda Inválido',
            'Dados de Endereço Pendente'
        ],
        fullName: 'Nome Completo',
        phone: '',
        birthDate: '',
        gender: '',
        cpf: '',
        rg: '',
        issuingBody: '',
        uf: '',
        nationality: '',
        naturality: '',
        maritalStatus: '',
        email: 'escola@seremunicipio.gov.br'
    });

    const [activeTab, setActiveTab] = useState('Dados do Aluno');

    // Função para renderizar os campos de acordo com a aba ativa
    const renderTabContent = () => {
        switch (activeTab) {
            case 'Dados do Aluno':
                return (
                    <div className="sp-tab-content-container">
                        <div className="sp-input-field">
                            <label>Nome Completo</label>
                            <input type="text" value={studentData.fullName} onChange={(e) => setStudentData({ ...studentData, fullName: e.target.value })} />
                        </div>
                        <div className="sp-input-field">
                            <label>Telefone</label>
                            <input type="text" value={studentData.phone} onChange={(e) => setStudentData({ ...studentData, phone: e.target.value })} />
                        </div>
                        <div className="sp-input-field">
                            <label>Data de Nascimento</label>
                            <input type="text" value={studentData.birthDate} onChange={(e) => setStudentData({ ...studentData, birthDate: e.target.value })} />
                        </div>
                        <div className="sp-input-field">
                            <label>Sexo</label>
                            <input type="text" value={studentData.gender} onChange={(e) => setStudentData({ ...studentData, gender: e.target.value })} />
                        </div>
                        <div className="sp-input-field">
                            <label>CPF</label>
                            <input type="text" value={studentData.cpf} onChange={(e) => setStudentData({ ...studentData, cpf: e.target.value })} />
                        </div>
                        <div className="sp-input-group">
                            <div className="sp-input-field sp-input-rg">
                                <label>RG</label>
                                <input type="text" value={studentData.rg} onChange={(e) => setStudentData({ ...studentData, rg: e.target.value })} />
                            </div>
                            <div className="sp-input-field sp-input-orgao">
                                <label>Órgão Expeditor</label>
                                <input type="text" value={studentData.issuingBody} onChange={(e) => setStudentData({ ...studentData, issuingBody: e.target.value })} />
                            </div>
                            <div className="sp-input-field sp-input-uf">
                                <label>UF</label>
                                <input type="text" value={studentData.uf} onChange={(e) => setStudentData({ ...studentData, uf: e.target.value })} />
                            </div>
                        </div>
                        <div className="sp-input-field">
                            <label>Nacionalidade</label>
                            <input type="text" value={studentData.nationality} onChange={(e) => setStudentData({ ...studentData, nationality: e.target.value })} />
                        </div>
                        <div className="sp-input-field">
                            <label>Naturalidade</label>
                            <input type="text" value={studentData.naturality} onChange={(e) => setStudentData({ ...studentData, naturality: e.target.value })} />
                        </div>
                        <div className="sp-input-field">
                            <label>Estado Civil</label>
                            <input type="text" value={studentData.maritalStatus} onChange={(e) => setStudentData({ ...studentData, maritalStatus: e.target.value })} />
                        </div>
                    </div>
                );
            case 'Endereço':
                return <div className="sp-tab-content-container">... Endereço ...</div>;
            case 'Dados Escolares':
                return <div className="sp-tab-content-container">... Dados Escolares ...</div>;
            case 'Documentação':
                return <div className="sp-tab-content-container">... Documentação ...</div>;
            default:
                return null;
        }
    };

    return (
        <div className="sp-profile-container">
            {/* Seção esquerda com dados do aluno e pendências */}
            <div className="sp-left-section">
                <div className="sp-student-card-profile">
                    <span className={`sp-status-tag sp-status-${studentData.status.toLowerCase()}`}>{studentData.status}</span>
                    <h2 className="sp-student-name">{studentData.name}</h2>
                    <span className="sp-student-enrollment">{studentData.enrollment}</span>
                    <img src={studentData.photo} alt="Foto do Aluno" className="sp-student-photo" />
                </div>

                <div className="sp-pendencies-card">
                    <h3>Pendências:</h3>
                    <ul>
                        {studentData.pendencies.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>

                <div className="sp-message-card">
                    <div className="sp-message-header">
                        <p>{studentData.email}</p>
                    </div>
                    <div className="sp-message-details">
                        <p>Favor Anexar</p>
                        <ul>
                            <li>Comprovante de Endereço Pendente</li>
                            <li>Comprovante de Renda Inválido</li>
                            <li>Dados de Endereço Pendente</li>
                        </ul>
                    </div>
                    <div className="sp-message-footer">
                        <span>12:30 - 10/01/2026</span>
                    </div>
                    <div className="sp-message-input">
                        <input type="text" placeholder="Digite uma mensagem ao responsável." />
                        <button className="sp-send-btn">Enviar</button>
                    </div>
                </div>

                <div className="sp-enrollment-info">
                    <p>Matrícula enviada em 10/12/2025</p>
                </div>
            </div>

            {/* Seção direita com abas de dados e edição */}
            <div className="sp-right-section">
                <div className="sp-tabs">
                    {['Dados do Aluno', 'Endereço', 'Dados Escolares', 'Documentação'].map(tab => (
                        <button
                            key={tab}
                            className={`sp-tab-btn ${activeTab === tab ? 'active' : ''}`}
                            onClick={() => setActiveTab(tab)}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
                {renderTabContent()}

                <div className="sp-vacancies-section">
                    <div className='sp-vacancies-header'>
                        <div className="sp-vacancies-turn">
                            <label>Selecionar Turno</label>
                            <select>
                                <option>Selecione</option>
                                <option>Manhã</option>
                                <option>Tarde</option>
                            </select>
                        </div>
                        <div className="sp-vacancies-turn">
                            <label>Selecionar Turma</label>
                            <select>
                                <option>Selecione</option>
                                <option>A</option>
                                <option>B</option>
                                <option>C</option>
                                <option>D</option>
                                <option>E</option>
                                <option>F</option>
                            </select>
                        </div>
                        <button className="sp-approve-btn">Aprovar Matrícula</button>
                    </div>
                    <div className="sp-vacancies-info">
                        <div className='sp-vacancies-details'>
                            <div className="sp-vacancy-count">
                                <p>Vagas Disponíveis (Manhã)</p>
                                <span>37</span>
                            </div>
                            <div className="sp-vacancy-count">
                                <p>Vagas Disponíveis (Tarde)</p>
                                <span>25</span>
                            </div>

                        </div>
                        <div className="sp-classes-vacancies">
                            {['A', 'B', 'C', 'D', 'E', 'F'].map((className, index) => (
                                <div key={index} className="sp-class-vacancy">
                                    <span className="sp-class-name">{className}</span>
                                    <span className="sp-class-count">{[15, 13, 9, 12, 4, 9][index]}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default StudentProfile;
