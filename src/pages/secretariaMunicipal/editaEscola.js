// EditSchoolPage.jsx
import React, { useState } from 'react';

// Mock data to simulate the school
const mockSchool = {
    name: 'Nome da Escola',
    applicationNumber: '2025101010',
    status: 'Lotado',
    solicitations: [
        'CNPJ',
        'Contrato social da instituição, registrado em cartório',
        'Cópia autenticada do cartão de CNPJ',
        'Certidões Negativas dos Cartórios de Protesto',
        'Declaração de Idoneidade do representante',
        'Termo de Responsabilidade do representante',
        'Escritura do imóvel ou contrato de aluguel',
        'Planta do imóvel com descrição das áreas',
        'Descrição dos materiais e acervo escolar',
        'Relação de recursos humanos (funcionários, funções e horários)',
        'Plano de capacitação contínua dos funcionários',
        'Declaração de capacidade total da escola',
        'Proposta pedagógica',
        'Currículo Escolar'
    ],
    chatMessages: [
        { from: 'escola', email: 'escola@nomemunicipio.gov.br', text: 'Favor Anexar', subText1: 'Comprovante de Endereço Pendente', subText2: 'Comprovante de Renda Inválido', subText3: 'Dados de Endereço Pendente', time: '12:36 - 10/01/2026' }
    ],
    matriculationDate: '10/12/2025',
    vacancies: [
        'Maternal I',
        'Maternal II',
        'Jardim I',
        'Jardim II',
        '1º Ano',
        '2º Ano',
        '3º Ano',
        '4º Ano',
        '5º Ano',
        '6º Ano',
        '7º Ano',
        '8º Ano',
        '9º Ano'
    ],
    users: [
        { name: 'Francisca Fulana Ferreira Nojosa', role: 'Diretor(a)', registrationDate: '10/10/2023', status: 'Ativo' },
        { name: 'Antonia Fulano Ferreira Nojosa', role: 'Secretário(a)', registrationDate: '10/10/2023', status: 'Ativo' }
    ],
    documentation: [
        'Foto Fachada da Escola',
        'CNPJ',
        'Alvará dos Bombeiros (Validade)',
        'Certidão Federal (Validade)',
        'Certidão Estadual (Validade)',
        'Certidão Municipal (Validade)',
        'Certidão Trabalhista FGTS (Validade)',
        'Certidão CRF (Validade)',
        'Termo de Responsabilidade',
        'Alvará de Funcionamento'
    ]
};

const EditSchoolPage = () => {
    const [activeTab, setActiveTab] = useState('Dados da Escola');

    const renderContent = () => {
        switch (activeTab) {
            case 'Dados da Escola':
                return (
                    <div className="sm:data-tab-content">
                        <div className="sm:form-row">
                            <label className="sm:input-label">Nome da Escola</label>
                            <input type="text" className="sm:input-field" placeholder="Nome da Escola" />
                        </div>
                        <div className="sm:form-row-grid">
                            <div className="sm:input-group">
                                <label className="sm:input-label">CEP</label>
                                <input type="text" className="sm:input-field" placeholder="CEP" />
                            </div>
                            <div className="sm:input-group">
                                <label className="sm:input-label">Endereço</label>
                                <input type="text" className="sm:input-field" placeholder="Endereço" />
                            </div>
                        </div>
                        <div className="sm:form-row-grid">
                            <div className="sm:input-group">
                                <label className="sm:input-label">Número</label>
                                <input type="text" className="sm:input-field" placeholder="Número" />
                            </div>
                            <div className="sm:input-group">
                                <label className="sm:input-label">Bairro</label>
                                <input type="text" className="sm:input-field" placeholder="Bairro" />
                            </div>
                        </div>
                        <div className="sm:form-row-grid-three">
                            <div className="sm:input-group">
                                <label className="sm:input-label">Região</label>
                                <input type="text" className="sm:input-field" placeholder="Região" />
                            </div>
                            <div className="sm:input-group">
                                <label className="sm:input-label">Oferece suporte especiais?</label>
                                <input type="text" className="sm:input-field" placeholder="Oferece suporte especiais?" />
                            </div>
                            <div className="sm:input-group">
                                <label className="sm:input-label">Vazio</label>
                                <input type="text" className="sm:input-field" placeholder="Vazio" />
                            </div>
                        </div>
                        <div className="sm:form-row">
                            <label className="sm:input-label">Selecione o Diretor(a)</label>
                            <input type="text" className="sm:input-field" placeholder="Selecione o Diretor(a)" />
                        </div>
                        <div className="sm:form-row">
                            <label className="sm:input-label">Selecione o Secretário(a)</label>
                            <input type="text" className="sm:input-field" placeholder="Selecione o Secretário(a)" />
                        </div>
                        <div className="sm:form-row">
                            <label className="sm:input-label">Email</label>
                            <input type="email" className="sm:input-field" placeholder="Email" />
                        </div>
                        <div className="sm:action-buttons">
                            <button className="sm:btn sm:secondary-btn">Editar</button>
                            <button className="sm:btn sm:primary-btn">Salvar</button>
                        </div>
                    </div>
                );
            case 'Vagas':
                return (
                    <div className="sm:data-tab-content">
                        <div className="sm:vacancies-grid">
                            {mockSchool.vacancies.map((grade, index) => (
                                <div key={index} className="sm:vacancies-row">
                                    <div className="sm:input-label">{grade}</div>
                                    <input type="text" className="sm:input-field" placeholder="100" />
                                </div>
                            ))}
                        </div>
                        <div className="sm:action-buttons">
                            <button className="sm:btn sm:secondary-btn">Editar</button>
                            <button className="sm:btn sm:primary-btn">Salvar</button>
                        </div>
                    </div>
                );
            case 'Usuários':
                return (
                    <div className="sm:data-tab-content">
                        {mockSchool.users.map((user, index) => (
                            <div key={index} className="sm:user-card">
                                <div className="sm:user-avatar"></div>
                                <div className="sm:user-info">
                                    <div className="sm:user-name">{user.name}</div>
                                    <div className="sm:user-role">{user.role}</div>
                                    <div className="sm:user-date">Cadastrado em {user.registrationDate}</div>
                                </div>
                                <div className="sm:user-status-container">
                                    <span className="sm:user-status">{user.status}</span>
                                    <span className="sm:user-edit-icon">&#9998;</span>
                                </div>
                            </div>
                        ))}
                        <div className="sm:add-user-card">
                            <div className="sm:add-user-icon">+</div>
                            <div className="sm:add-user-text">Adicionar Novo Usuário</div>
                            <div className="sm:add-user-subtext">Somente insira usuários desta escola</div>
                        </div>
                    </div>
                );
            case 'Documentação':
                return (
                    <div className="sm:data-tab-content">
                        <div className="sm:documentation-grid">
                            {mockSchool.documentation.map((doc, index) => (
                                <div key={index} className="sm:doc-card">
                                    <div className="sm:doc-icon">&#8679;</div>
                                    <div className="sm:doc-text">Anexar</div>
                                    <div className="sm:doc-label">{doc}</div>
                                </div>
                            ))}
                        </div>
                        <div className="sm:action-buttons">
                            <button className="sm:btn sm:secondary-btn">Editar</button>
                            <button className="sm:btn sm:primary-btn">Salvar</button>
                        </div>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="sm:page-container">
            {/* Seção Lateral - Dados da Escola com Chat */}
            <div className="sm:sidebar">
                <div className="sm:sidebar-card sm:school-info">
                    <h2 className="sm:school-name">{mockSchool.name}</h2>
                    <span className="sm:application-number">{mockSchool.applicationNumber}</span>
                    <div className="sm:status-tag sm:listed-status">{mockSchool.status}</div>
                </div>

                <div className="sm:sidebar-card">
                    <h3 className="sm:card-title-red">Solicitações:</h3>
                    <ul className="sm:solicitations-list">
                        {mockSchool.solicitations.map((solicitation, index) => (
                            <li key={index}>{solicitation}</li>
                        ))}
                    </ul>
                </div>

                <div className="sm:sidebar-card">
                    <h3 className="sm:card-title-chat">Fale com a escola</h3>
                    <div className="sm:chat-box">
                        {mockSchool.chatMessages.map((message, index) => (
                            <div key={index} className="sm:chat-message">
                                <span className="sm:chat-email">{message.email}</span>
                                <p className="sm:chat-main-text">{message.text}</p>
                                <ul className="sm:chat-list">
                                    <li>{message.subText1}</li>
                                    <li>{message.subText2}</li>
                                    <li>{message.subText3}</li>
                                </ul>
                                <span className="sm:chat-time">{message.time}</span>
                            </div>
                        ))}
                    </div>
                    <div className="sm:message-input-container">
                        <input type="text" placeholder="Digite uma mensagem ao responsável." className="sm:message-input" />
                        <button className="sm:send-btn">Enviar</button>
                    </div>
                </div>

                <div className="sm:sidebar-footer">
                    Matrícula enviada em {mockSchool.matriculationDate}
                </div>
            </div>

            {/* Seção Central - Formulário de Edição */}
            <div className="sm:main-content">
                <div className="sm:tabs-container">
                    {['Dados da Escola', 'Vagas', 'Usuários', 'Documentação'].map(tab => (
                        <button
                            key={tab}
                            className={`sm:tab-btn ${activeTab === tab ? 'sm:active-tab' : ''}`}
                            onClick={() => setActiveTab(tab)}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
                <div className="sm:form-container">
                    {renderContent()}
                </div>
            </div>
        </div>
    );
};

export default EditSchoolPage;
