import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LineChart, Line, Legend } from 'recharts';

// Dados mockados para simular a dashboard
const dashboardData = {
    metrics: [
        { label: 'Total de Vagas Ocupadas', value: '5.582' },
        { label: 'Avaliação da Rede', value: '4,8' },
        { label: 'Total de Vagas Disponíveis', value: '6.965' },
        { label: 'Taxa de Ocupação', value: '93,6%' },
    ],
    barChartData: [
        { name: 'Educ. Infantil 1', vagas: 2500, fill: '#F7859D' },
        { name: 'Educ. Infantil 2', vagas: 3100, fill: '#F7859D' },
        { name: '1º Ano', vagas: 1800, fill: '#d8b4fe' },
        { name: '2º Ano', vagas: 2200, fill: '#d8b4fe' },
        { name: '3º Ano', vagas: 2500, fill: '#d8b4fe' },
        { name: '4º Ano', vagas: 2000, fill: '#d8b4fe' },
        { name: '5º Ano', vagas: 2800, fill: '#d8b4fe' },
        { name: '6º Ano', vagas: 3000, fill: '#d8b4fe' },
        { name: '7º Ano', vagas: 2100, fill: '#d8b4fe' },
        { name: '8º Ano', vagas: 2500, fill: '#d8b4fe' },
        { name: '9º Ano', vagas: 3200, fill: '#d8b4fe' },
    ],
    lineChartData: [
        { name: 'Janeiro', valor: 0 },
        { name: 'Fevereiro', valor: 2500 },
        { name: 'Março', valor: 1800 },
        { name: 'Abril', valor: 1200 },
        { name: 'Maio', valor: 3500 },
        { name: 'Junho', valor: 2800 },
        { name: 'Julho', valor: 1500 },
        { name: 'Agosto', valor: 9000 },
        { name: 'Setembro', valor: 1000 },
        { name: 'Outubro', valor: 4500 },
        { name: 'Novembro', valor: 7000 },
        { name: 'Dezembro', valor: 6500 },
    ]
};

const DashboardSME = () => {
    const [activeTab, setActiveTab] = useState('Matrículas');

    return (
        <div className="sme-dashboard-container">
            {/* Título e seletor de escola */}
            <header className="sme-header">
                <h1 className="sme-title">Seja Bem-Vindo ao Painel</h1>
                <span className="sme-subtitle">SME - Município</span>
                <div className="sme-school-selector-wrapper">
                    <select className="sme-school-selector">
                        <option>Selecione a Escola</option>
                    </select>
                </div>
            </header>

            {/* Seção de Métricas */}
            <section className="sme-metrics-grid">
                {dashboardData.metrics.map((metric, index) => (
                    <div key={index} className="sme-metric-card">
                        <span className="sme-metric-label">{metric.label}</span>
                        <h2 className="sme-metric-value">{metric.value}</h2>
                    </div>
                ))}
            </section>

            {/* Abas de Status de Matrículas */}
            <section className="sme-tabs-container">
                {['Matrículas', 'Matrículas Pendentes', 'Matrículas Aprovadas', 'Matrículas em Análise'].map(tab => (
                    <button
                        key={tab}
                        className={`sme-tab-btn ${activeTab === tab ? 'active' : ''}`}
                        onClick={() => setActiveTab(tab)}
                    >
                        {tab}
                    </button>
                ))}
            </section>

            {/* Seção do Gráfico de Barras com Recharts */}
            <section className="sme-chart-card">
                <div className="sme-chart-legend">
                    <p className="sme-legend-item education-infantil">Educação Infantil</p>
                    <p className="sme-legend-item ensino-fundamental">Ensino Fundamental</p>
                </div>
                <ResponsiveContainer width="100%" height={400}>
                    <BarChart
                        data={dashboardData.barChartData}
                        layout="vertical"
                        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    >
                        <XAxis type="number" hide />
                        <YAxis type="category" dataKey="name" axisLine={false} tickLine={false} />
                        <Tooltip />
                        <Bar dataKey="vagas" fill="#8884d8" barSize={20} />
                    </BarChart>
                </ResponsiveContainer>
            </section>

            {/* Seção do Gráfico de Linha com Recharts */}
            <section className="sme-chart-card">
                <ResponsiveContainer width="100%" height={400}>
                    <LineChart data={dashboardData.lineChartData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="valor" stroke="#F7859D" strokeWidth={2} activeDot={{ r: 10 }} />
                    </LineChart>
                </ResponsiveContainer>
            </section>
        </div>
    );
};

export default DashboardSME;
