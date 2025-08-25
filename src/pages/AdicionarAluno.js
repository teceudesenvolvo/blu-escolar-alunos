import React, { useState } from 'react';
import { FiUpload } from 'react-icons/fi';

const AddStudentPage = () => {
    const [step, setStep] = useState(1);

    const handleNextStep = () => {
        if (step < 5) {
            setStep(step + 1);
        }
    };

    const handlePrevStep = () => {
        if (step > 1) {
            setStep(step - 1);
        }
    };

    const handleFinish = () => {
        alert('Formulário enviado com sucesso!');
    };

    // Componente para a etapa 1: Dados do Aluno
    const Step1 = () => (
        <div className="form-section">
            <div className="input-row">
                <div className="input-group full-width">
                    <label>Nome Completo</label>
                    <input type="text" />
                </div>
            </div>
            <div className="input-row">
                <div className="input-group">
                    <label>Data de Nascimento</label>
                    <input type="date" />
                </div>
                <div className="input-group">
                    <label>Cor ou Raça</label>
                    <select>
                        <option>Branca</option>
                        <option>Preta</option>
                        <option>Parda</option>
                        <option>Amarela</option>
                        <option>Indígena</option>
                        <option>Não declarar</option>
                    </select>
                </div>
            </div>
            <div className="input-row">
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
                    <label>Tipo Sanguíneo</label>
                    <select>
                        <option>A+</option>
                        <option>A-</option>
                        <option>B+</option>
                        <option>B-</option>
                        <option>AB+</option>
                        <option>AB-</option>
                        <option>O+</option>
                        <option>O-</option>
                    </select>
                </div>
            </div>
            <div className="input-row">
                <div className="input-group full-width">
                    <label>CPF</label>
                    <input type="number" />
                </div>
                <div className="input-group">
                    <label>Possui Necessidades Educacionais Especiais?</label>
                    <select>
                        <option>Sim</option>
                        <option>Não</option>
                    </select>
                </div>
            </div>
            <div className="input-row">
                <div className="input-group">
                    <label>RG</label>
                    <input type="number" />
                </div>
                <div className="input-group">
                    <label>Órgão Expeditor</label>
                    <input type="text" />
                </div>
                <div className="input-group">
                    <label>UF</label>
                    <select>
                        <option>CE</option>
                        <option>SP</option>
                        <option>RJ</option>
                    </select>
                </div>
            </div>
            <div className="input-row">
                <div className="input-group full-width">
                    <label>Nacionalidade</label>
                    <select>
                        <option>Brasileiro</option>
                        <option>Estrangeiro</option>
                    </select>
                </div>
            </div>
            <div className="input-row">
                <div className="input-group full-width">
                    <label>Naturalidade</label>
                    <input type="text" />
                </div>
            </div>
        </div>
    );

    // Componente para a etapa 2: Endereço
    const Step2 = () => (
        <div className="form-section">
            <div className="input-row">
                <div className="input-group">
                    <label>CEP</label>
                    <input type="text" />
                </div>
                <div className="input-group">
                    <label>Bairro</label>
                    <input type="text" />
                </div>
            </div>
            <div className="input-row">
                <div className="input-group full-width">
                    <label>Logradouro</label>
                    <input type="text" />
                </div>
            </div>
            <div className="input-row">
                <div className="input-group">
                    <label>Número</label>
                    <input type="text" />
                </div>
                <div className="input-group">
                    <label>Cidade</label>
                    <input type="text" />
                </div>
            </div>
            <div className="input-row">
                <div className="input-group">
                    <label>Complemento</label>
                    <input type="text" />
                </div>
                <div className="input-group">
                    <label>Estado</label>
                    <select>
                        <option>Ceará</option>
                        <option>São Paulo</option>
                    </select>
                </div>
            </div>
        </div>
    );

    // Componente para a etapa 3: Dados Escolares
    const Step3 = () => (
        <div className="form-section">
            <div className="input-row">
                <div className="input-group">
                    <label>Ano Letivo</label>
                    <input type="text" />
                </div>
                <div className="input-group">
                    <label>Nome da Última Escola</label>
                    <input type="text" />
                </div>
            </div>
            <div className="input-row">
                <div className="input-group">
                    <label>Série/Ano Escolar</label>
                    <select>
                        <option>1º Ano</option>
                        <option>2º Ano</option>
                    </select>
                </div>
                <div className="input-group">
                    <label>Alergias</label>
                    <textarea></textarea>
                </div>
            </div>
            <div className="input-row">
                <div className="input-group">
                    <label>Turno</label>
                    <select>
                        <option>Manhã</option>
                        <option>Tarde</option>
                        <option>Integral</option>
                    </select>
                </div>
                <div className="input-group">
                    <label>Uso de Medicamentos</label>
                    <textarea></textarea>
                </div>
            </div>
            <div className="input-row">
                <div className="input-group">
                    <label>Situação de Matrícula Anterior</label>
                    <select>
                        <option>Matriculado</option>
                        <option>Transferido</option>
                        <option>Retornado</option>
                        <option>Nunca estudou</option>
                    </select>
                </div>
                <div className="input-group">
                    <label>Observações Médicas</label>
                    <textarea></textarea>
                </div>
            </div>
        </div>
    );

    // Componente para a etapa 4: Documentação
    const Step4 = () => (
        <div className="form-section documentacao-section">
            <div className="document-card">
                <FiUpload className="upload-icon" />
                <p>Anexar</p>
                <span>Foto Oficial do Aluno</span>
            </div>
            <div className="document-card">
                <FiUpload className="upload-icon" />
                <p>Anexar</p>
                <span>CPF</span>
            </div>
            <div className="document-card">
                <FiUpload className="upload-icon" />
                <p>Anexar</p>
                <span>Carteira de identidade (RG)</span>
            </div>
            <div className="document-card">
                <FiUpload className="upload-icon" />
                <p>Anexar</p>
                <span>Histórico Escolar ou Declaração de Escolaridade</span>
            </div>
            <div className="document-card">
                <FiUpload className="upload-icon" />
                <p>Anexar</p>
                <span>Carteira de Vacinação atualizada</span>
            </div>
            <div className="document-card">
                <FiUpload className="upload-icon" />
                <p>Anexar</p>
                <span>Certidão de Nascimento</span>
            </div>
            <div className="document-card">
                <FiUpload className="upload-icon" />
                <p>Anexar</p>
                <span>Comprovante de residência atualizado</span>
            </div>
            <div className="document-card">
                <FiUpload className="upload-icon" />
                <p>Anexar</p>
                <span>Comprovante de renda familiar</span>
            </div>
            <div className="document-card">
                <FiUpload className="upload-icon" />
                <p>Anexar</p>
                <span>Laudo médico</span>
            </div>
            <div className="document-card">
                <FiUpload className="upload-icon" />
                <p>Anexar</p>
                <span>Número de Identificação Social (NIS)</span>
            </div>
        </div>
    );

    // Componente para a etapa 5: Termo de Adesão de Matrícula
    const Step5 = () => (
        <div className="form-section termo-section">
            <div className="termo-header">
                <h3>Termo de Adesão de Matrícula</h3>
            </div>
            <div className="termo-content">
                <p><strong>ANO LETIVO DE 2025</strong></p>
                <p><strong>1. DADOS DA ESCOLA</strong></p>
                <ul>
                    <li>Nome da Escola: [NOME DA ESCOLA PÚBLICA]</li>
                    <li>Endereço: [ENDEREÇO COMPLETO DA ESCOLA]</li>
                    <li>Telefone: [TELEFONE DA ESCOLA]</li>
                    <li>E-mail: [E-MAIL DA ESCOLA]</li>
                    <li>Código INEP: [CÓDIGO INEP DA ESCOLA]</li>
                </ul>
                <p><strong>2. DADOS DO(A) ESTUDANTE</strong></p>
                <ul>
                    <li>Nome Completo: [NOME COMPLETO DO(A) ALUNO(A)]</li>
                    <li>Data de Nascimento: [DATA DE NASCIMENTO]</li>
                    <li>Série/Ano: [SÉRIE/ANO]</li>
                    <li>Turma: [TURMA]</li>
                    <li>Turno: [TURNO (Manhã, Tarde, Integral)]</li>
                </ul>
                <p><strong>3. DADOS DO(A) RESPONSÁVEL LEGAL</strong></p>
                <ul>
                    <li>Nome Completo: [NOME COMPLETO DO(A) RESPONSÁVEL]</li>
                    <li>CPF: [CPF DO(A) RESPONSÁVEL]</li>
                    <li>RG: [RG DO(A) RESPONSÁVEL]</li>
                    <li>Endereço: [ENDEREÇO COMPLETO DO(A) RESPONSÁVEL]</li>
                    <li>Telefone: [TELEFONE DE CONTATO]</li>
                    <li>E-mail: [E-MAIL DE CONTATO]</li>
                </ul>
                <p><strong>4. CLÁUSULAS E COMPROMISSOS</strong></p>
                <p>Pela assinatura deste Termo, o(a) Responsável Legal e o(a) Estudante se comprometem a seguir e respeitar as seguintes condições:</p>
                <p><strong>4.1. Compromissos do(a) Responsável Legal e do(a) Estudante:</strong><br />a) Frequência e Assiduidade: O(A) estudante deve ter frequência mínima de 75% das aulas para ser aprovado(a). É responsabilidade do(a) responsável justificar as faltas por meio de atestado médico ou declaração.</p>
                <p>b) Participação e Diálogo: O(A) responsável se compromete a participar ativamente da vida escolar do(a) estudante, comparecendo às reuniões de pais e mestres e mantendo um canal de comunicação aberto com a escola.</p>
                <p>c) Regimento Escolar: O(A) estudante e seu(sua) responsável declaram ter conhecimento e se comprometem a cumprir o Regimento Escolar da instituição, que está disponível na secretaria da escola.</p>
                <p>d) Uso de Imagem: A escola está autorizada a utilizar a imagem do(a) estudante, sem ônus, em projetos pedagógicos, eventos internos, e divulgação em canais oficiais da escola, como site e redes sociais, desde que seja para fins educativos.</p>
                <p>e) Materiais e Zeladoria: O(A) estudante e seu(sua) responsável se responsabilizam por zelar pelo material didático e pelo patrimônio da escola, comprometendo-se a reparar eventuais danos causados.</p>
                <p><strong>4.2. Compromissos da Escola:</strong><br />a) Ensino de Qualidade: A escola se compromete a oferecer um ensino de qualidade, com professores qualificados e uma proposta pedagógica que visa ao desenvolvimento integral do(a) estudante.</p>
                <p>b) Informação e Transparência: A escola se compromete a manter o(a) responsável informado(a) sobre a frequência, o desempenho acadêmico e o comportamento do(a) estudante, utilizando os meios de comunicação disponíveis.</p>
                <p>c) Ambiente Seguro: A escola se compromete a garantir um ambiente escolar seguro, saudável e acolhedor, livre de qualquer forma de violência ou discriminação.</p>
                <p><strong>5. DECLARAÇÃO DE CIÊNCIA E CONCORDÂNCIA</strong></p>
                <p>Declaro, para todos os fins de direito, que li, entendi e concordo com todas as cláusulas e compromissos estabelecidos neste Termo de Adesão de Matrícula.</p>
            </div>
            <div className="termo-signatures">
                <div className="signature-line">
                    <p>_____________________________________</p>
                    <p>Responsável Legal</p>
                    <p>[NOME COMPLETO DO(A) RESPONSÁVEL]</p>
                </div>
                <div className="signature-line">
                    <p>_____________________________________</p>
                    <p>Direção da Escola</p>
                    <p>[NOME DA DIREÇÃO]</p>
                </div>
            </div>
        </div>
    );

    return (
        <div className="add-student-container">
            <header className="add-student-header">
                <div className="tabs">
                    <button className={`tab-btn ${step === 1 ? 'active' : ''}`}>Dados do Aluno</button>
                    <button className={`tab-btn ${step === 2 ? 'active' : ''}`}>Endereço</button>
                    <button className={`tab-btn ${step === 3 ? 'active' : ''}`}>Dados Escolares</button>
                    <button className={`tab-btn ${step === 4 ? 'active' : ''}`}>Documentação</button>
                    <button className={`tab-btn ${step === 5 ? 'active' : ''}`}>Termo</button>
                </div>
            </header>

            <section className="form-content-container">
                {step === 1 && <Step1 />}
                {step === 2 && <Step2 />}
                {step === 3 && <Step3 />}
                {step === 4 && <Step4 />}
                {step === 5 && <Step5 />}
            </section>

            <footer className="form-navigation">
                {step > 1 && (
                    <button className="nav-btn prev-btn" onClick={handlePrevStep}>Anterior</button>
                )}
                {step < 5 && (
                    <button className="nav-btn next-btn" onClick={handleNextStep}>Próximo</button>
                )}
                {step === 5 && (
                    <button className="nav-btn submit-btn" onClick={handleFinish}>Assinar Termo</button>
                )}
            </footer>
        </div>
    );
};

export default AddStudentPage;
