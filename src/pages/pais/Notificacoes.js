import React from 'react';

// Dados de exemplo para simular o backend
const notificationsData = [
    {
        id: 1,
        title: 'Notificação 1',
        details: 'Detalhes da notificação'
    },
    {
        id: 2,
        title: 'Notificação 2',
        details: 'Detalhes da notificação'
    },
    {
        id: 3,
        title: 'Notificação 3',
        details: 'Detalhes da notificação'
    },
    {
        id: 4,
        title: 'Notificação 4',
        details: 'Detalhes da notificação'
    }
];

function NotificationPage() {
    return (
        <div className="notification-container">
            <header className="notification-header">
                <h2>Notificações</h2>
            </header>

            <section className="notification-list">
                {notificationsData.map(notification => (
                    <div key={notification.id} className="notification-card">
                        <h3>{notification.title}</h3>
                        <p>{notification.details}</p>
                    </div>
                ))}
            </section>
        </div>
    );
}

export default NotificationPage;
