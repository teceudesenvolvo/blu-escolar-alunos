import React, { useState } from 'react';
import { BellIcon,  Trash2 } from 'lucide-react';

const Notify = () => {
  const [selectedRecipient, setSelectedRecipient] = useState('Pais');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const notifications = [
    {
      id: 1,
      title: 'Notificação IX',
      recipient: 'Diretores',
      status: 'Enviada',
      content: 'Assunto: Elementos da Página\nPara: Diretores\nMensagem: Lista de Usuários: tabela com todos os usuários do sistema, incluindo administradores da Secretaria e da equipe de cada escola....',
    },
    {
      id: 2,
      title: 'Notificação de Teste',
      recipient: 'Pais',
      status: 'Enviada',
      content: 'Assunto: Reunião Escolar\nMensagem: Prezado(a) responsável, gostaríamos de convidar para a reunião de pais e mestres no dia 20/09 às 19h. Contamos com sua presença.',
    },
  ];

  const handleSendNotification = () => {
    // Lógica para enviar a notificação.
    // Pode ser uma chamada de API, etc.
    alert('Notificação enviada!');
    setSubject('');
    setMessage('');
  };

 
  const handleClear = () => {
    setSubject('');
    setMessage('');
  };

  return (
    <div className="sm-notify-container">
      <div className="sm-notify-card">
        <h2 className="sm-notify-title">Enviar Notificações</h2>
        <p className="sm-notify-subtitle">Escreva a notificação</p>

        <div className="sm-form-group">
          <label htmlFor="subject">Assunto</label>
          <input
            type="text"
            id="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="sm-input-field"
            placeholder="Assunto da notificação"
          />
        </div>

        <div className="sm-recipient-tabs">
          {['Pais', 'Diretores', 'Secretários'].map(tab => (
            <button
              key={tab}
              className={`sm-tab-button ${selectedRecipient === tab ? 'sm-active' : ''}`}
              onClick={() => setSelectedRecipient(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="sm-form-group">
          <label htmlFor="message">Mensagem</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="sm-textarea-field"
            rows="5"
            placeholder="Escreva a mensagem aqui..."
          ></textarea>
        </div>

        <div className="sm-notify-actions">
          
          <button className="sm-btn sm-btn-clear" onClick={handleClear}>
            <Trash2 size={16} /> Limpar
          </button>
          <button className="sm-btn sm-btn-send" onClick={handleSendNotification}>
            <BellIcon size={16} /> Enviar Notificação
          </button>
        </div>
      </div>

      <div className="sm-sent-notifications-section">
        <h3 className="sm-section-title">Notificações Enviadas</h3>
        <div className="sm-notifications-grid">
         
          {notifications.map(notif => (
            <div key={notif.id} className="sm-notification-card">
              <span className="sm-notification-status">{notif.status}</span>
              <h4 className="sm-notification-title">{notif.title}</h4>
              <p className="sm-notification-content">{notif.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Notify;
