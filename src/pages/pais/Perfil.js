import React, { useState } from 'react';
import profileImage from '../../assets/teacher.webp';

// Ícones SVG para os botões e abas


const ProfilePage = () => {
    const [activeTab, setActiveTab] = useState('pessoais');

    const handleImageChange = (e) => {
      // Simulação de alteração de imagem
      alert('Funcionalidade de troca de imagem ainda não implementada.');
    };

    const handleEdit = () => {
      // Simulação de clique no botão de edição
      alert('Funcionalidade de edição ainda não implementada.');
    };

    const pendingSituations = [
        'Certidão de Casamento Pendente',
        'Comprovante de Endereço Pendente',
        'Comprovante de Renda Inválido',
        'Dados de Endereço Pendente'
    ];

    return (
        <div className="profile-container">
            <div className="profile-card">
                <div className="profile-header-card">
                    <h2>Nome</h2>
                </div>
                <div className="profile-image-container">
                    <img src={profileImage} alt="User Profile" className='img-profile' />
                    <button className="change-image-btn" onClick={handleImageChange}>Trocar Imagem</button>
                </div>
                <div className="profile-status">
                    <h3>Situação:</h3>
                    <ul>
                        {pendingSituations.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
                <div className="profile-footer">
                    <p>Perfil Criado em 12/11/2025</p>
                </div>
            </div>
            
            <div className="profile-form-container">
                <div className="tabs">
                    <button 
                        className={`tab-btn ${activeTab === 'pessoais' ? 'active' : ''}`}
                        onClick={() => setActiveTab('pessoais')}
                    >
                        Dados do Pessoais
                    </button>
                    <button 
                        className={`tab-btn ${activeTab === 'contatos' ? 'active' : ''}`}
                        onClick={() => setActiveTab('contatos')}
                    >
                        Endereço e Contatos
                    </button>
                    <button 
                        className={`tab-btn ${activeTab === 'seguranca' ? 'active' : ''}`}
                        onClick={() => setActiveTab('seguranca')}
                    >
                        Segurança
                    </button>
                    <button 
                        className={`tab-btn ${activeTab === 'documentacao' ? 'active' : ''}`}
                        onClick={() => setActiveTab('documentacao')}
                    >
                        Documentação
                    </button>
                </div>

                <div className="form-content">
                    {activeTab === 'pessoais' && (
                        <div className="form-section">
                            <div className="input-group">
                                <label>Nome Completo</label>
                                <input type="text" placeholder="Nome Completo" />
                            </div>
                            <div className="input-group">
                                <label>Telefone</label>
                                <input type="number" placeholder="Telefone" />
                            </div>
                            <div className="input-group">
                                <label>Data de Nascimento</label>
                                <input type="date" />
                            </div>
                            <div className="input-group">
                                <label>Sexo</label>
                                <select>
                                    <option>Masculino</option>
                                    <option>Feminino</option>
                                    <option>Não Binário</option>
                                    <option>Prefiro não informar</option>
                                </select>
                            </div>
                            <div className="input-group">
                                <label>CPF</label>
                                <input type="number" placeholder="CPF" />
                            </div>
                            <div className="input-group input-group-row">
                                <div className="input-sub-group">
                                    <label>RG</label>
                                    <input type="number" placeholder="RG" />
                                </div>
                                <div className="input-sub-group">
                                    <label>Órgão Expeditor</label>
                                    <input type="text" placeholder="Órgão Expeditor" />
                                </div>
                                <div className="input-sub-group">
                                    <label>UF</label>
                                    <select>
                                        <option>CE</option>
                                        <option>SP</option>
                                        <option>RJ</option>
                                    </select>
                                </div>
                            </div>
                            <div className="input-group">
                                <label>Nacionalidade</label>
                                <select>
                                    <option>Brasileiro</option>
                                    <option>Estrangeiro</option>
                                </select>
                            </div>
                            <div className="input-group">
                                <label>Naturalidade</label>
                                <input type="text" placeholder="Naturalidade" />
                            </div>
                            <div className="input-group">
                                <label>Estado Civil</label>
                                <select>
                                    <option>Casado</option>
                                    <option>Solteiro</option>
                                    <option>Divorciado</option>
                                    <option>Viúvo</option>
                                </select>
                            </div>
                            <button className="edit-btn" onClick={handleEdit}>Editar</button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
