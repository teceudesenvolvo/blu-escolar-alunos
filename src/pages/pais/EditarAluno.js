import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

// Ícones SVG para os botões e abas

const EditStudentPage = () => {
    // Estado para controlar a aba ativa do formulário
    const [activeTab, setActiveTab] = useState('pessoais');
    // Estado para o nome do aluno
    const [name, setName] = useState('Nome do Aluno');
    // Estado para a foto do aluno
    const [profileImage] = useState('https://placehold.co/120x120/4C50F5/FFFFFF?text=User');
    // Hook para pegar o parâmetro do nome do aluno da URL
    const [searchParams] = useSearchParams();
    const studentNameFromUrl = searchParams.get('aluno');

    // Se o nome do aluno vier da URL, atualiza o estado
    if (studentNameFromUrl && studentNameFromUrl !== name) {
        setName(studentNameFromUrl);
    }

    // Função para lidar com o envio de mensagem
    const handleSendMessage = () => {
        alert('Mensagem enviada!');
    };

    // Função para simular a mudança de imagem
    

    // Pendências simuladas
    const pendingSituations = [
        'Certidão de Casamento Pendente',
        'Comprovante de Endereço Pendente',
        'Comprovante de Renda Inválido',
        'Dados de Endereço Pendente'
    ];

    return (
        <div className="edit-student-container">
            <div className="info-card">
                <div className="student-header-card">
                    <h2>{name}</h2>
                    <p>2025101010</p>
                </div>
                <div className="student-image-container">
                    <img src={profileImage} alt="Student Profile" />
                    <button className="status-btn approved">Aprovada</button>
                </div>
                <div className="student-pendencias">
                    <h3>Pendências:</h3>
                    <ul>
                        {pendingSituations.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
                <div className="message-box-card">
                    <div className="message-header">
                        <p>escola@nomedomunicipio.gov.br</p>
                    </div>
                    <div className="message-content">
                        <p>Favor Anexar:</p>
                        <ul>
                            <li>Comprovante de Endereço Pendente</li>
                            <li>Comprovante de Renda Inválido</li>
                            <li>Dados de Endereço Pendente</li>
                        </ul>
                        <span>12:30 - 10/11/2025</span>
                    </div>
                    <div className="message-input-container">
                        <input type="text" placeholder="Digite uma mensagem ao responsável." />
                        <button onClick={handleSendMessage}>Enviar</button>
                    </div>
                </div>
                <div className="student-footer">
                    <p>Matrícula enviada em 10/12/2025</p>
                </div>
            </div>
            
            <div className="form-container">
                <div className="tabs">
                    <button 
                        className={`tab-btn ${activeTab === 'pessoais' ? 'active' : ''}`}
                        onClick={() => setActiveTab('pessoais')}
                    >
                        Dados do Aluno
                    </button>
                    <button 
                        className={`tab-btn ${activeTab === 'endereco' ? 'active' : ''}`}
                        onClick={() => setActiveTab('endereco')}
                    >
                        Endereço
                    </button>
                    <button 
                        className={`tab-btn ${activeTab === 'escolares' ? 'active' : ''}`}
                        onClick={() => setActiveTab('escolares')}
                    >
                        Dados Escolares
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
                        </div>
                    )}

                    {activeTab === 'endereco' && (
                        <div className="form-section">
                            <div className="input-group">
                                <label>CEP</label>
                                <input type="text" placeholder="CEP" />
                            </div>
                            <div className="input-group">
                                <label>Bairro</label>
                                <input type="text" placeholder="Bairro" />
                            </div>
                            <div className="input-group">
                                <label>Logradouro</label>
                                <input type="text" placeholder="Logradouro" />
                            </div>
                            <div className="input-group">
                                <label>Cidade</label>
                                <input type="text" placeholder="Cidade" />
                            </div>
                            <div className="input-group">
                                <label>Número</label>
                                <input type="text" placeholder="Número" />
                            </div>
                            <div className="input-group">
                                <label>Estado</label>
                                <input type="text" placeholder="Estado" />
                            </div>
                            <div className="input-group">
                                <label>Complemento</label>
                                <input type="text" placeholder="Complemento" />
                            </div>
                        </div>
                    )}

                    {activeTab === 'escolares' && (
                        <div className="form-section">
                            <div className="input-group">
                                <label>Ano Letivo</label>
                                <input type="text" placeholder="Ano Letivo" />
                            </div>
                            <div className="input-group">
                                <label>Nome da Última Escola</label>
                                <input type="text" placeholder="Nome da Última Escola" />
                            </div>
                            <div className="input-group">
                                <label>Série/Ano Escolar</label>
                                <input type="text" placeholder="Série/Ano Escolar" />
                            </div>
                            <div className="input-group">
                                <label>Alergias</label>
                                <textarea placeholder="Alergias"></textarea>
                            </div>
                            <div className="input-group">
                                <label>Turno</label>
                                <input type="text" placeholder="Turno" />
                            </div>
                            <div className="input-group">
                                <label>Uso de Medicamentos</label>
                                <textarea placeholder="Uso de Medicamentos"></textarea>
                            </div>
                            <div className="input-group">
                                <label>Situação de Matrícula Anterior</label>
                                <input type="text" placeholder="Situação de Matrícula Anterior" />
                            </div>
                            <div className="input-group">
                                <label>Observações Médicas</label>
                                <textarea placeholder="Observações Médicas"></textarea>
                            </div>
                        </div>
                    )}

                    {activeTab === 'documentacao' && (
                        <div className="form-section documentacao-section">
                            <div className="document-card">
                                <img src="https://placehold.co/100x100?text=Upload" alt="Upload Icon" />
                                <p>Anexar</p>
                                <span>Foto Oficial do Aluno</span>
                            </div>
                            <div className="document-card">
                                <img src="https://placehold.co/100x100?text=Upload" alt="Upload Icon" />
                                <p>Anexar</p>
                                <span>CPF</span>
                            </div>
                            <div className="document-card">
                                <img src="https://placehold.co/100x100?text=Upload" alt="Upload Icon" />
                                <p>Anexar</p>
                                <span>Carteira de identidade (RG)</span>
                            </div>
                            <div className="document-card">
                                <img src="https://placehold.co/100x100?text=Upload" alt="Upload Icon" />
                                <p>Anexar</p>
                                <span>Histórico Escolar ou Declaração de Escolaridade</span>
                            </div>
                            <div className="document-card">
                                <img src="https://placehold.co/100x100?text=Upload" alt="Upload Icon" />
                                <p>Anexar</p>
                                <span>Carteira de Vacinação atualizada</span>
                            </div>
                            <div className="document-card">
                                <img src="https://placehold.co/100x100?text=Upload" alt="Upload Icon" />
                                <p>Anexar</p>
                                <span>Certidão de Nascimento</span>
                            </div>
                            <div className="document-card">
                                <img src="https://placehold.co/100x100?text=Upload" alt="Upload Icon" />
                                <p>Anexar</p>
                                <span>Comprovante de residência atualizado</span>
                            </div>
                            <div className="document-card">
                                <img src="https://placehold.co/100x100?text=Upload" alt="Upload Icon" />
                                <p>Anexar</p>
                                <span>Comprovante de renda familiar</span>
                            </div>
                            <div className="document-card">
                                <img src="https://placehold.co/100x100?text=Upload" alt="Upload Icon" />
                                <p>Anexar</p>
                                <span>Laudo médico</span>
                            </div>
                            <div className="document-card">
                                <img src="https://placehold.co/100x100?text=Upload" alt="Upload Icon" />
                                <p>Anexar</p>
                                <span>Número de Identificação Social (NIS)</span>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default EditStudentPage;
