import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const SecretaryDashboard = () => {
    // Estado para controlar a aba de filtro ativa no gráfico
    const [activeTab, setActiveTab] = useState('Matrículas');

    // Dados de exemplo para os cards de estatísticas
    const stats = [
        { title: 'Total de Vagas Ocupadas', value: '5.582' },
        { title: 'Avaliação da Escola', value: '4,8' },
        { title: 'Total de Vagas Disponíveis', value: '5.965' },
        { title: 'Taxa de Ocupação', value: '0,93' },
    ];

    // Dados de exemplo para o gráfico, representando a evolução mensal das matrículas
    const data = [
        { name: 'Janeiro', Matrículas: 150 },
        { name: 'Fevereiro', Matrículas: 1500 },
        { name: 'Março', Matrículas: 2000 },
        { name: 'Abril', Matrículas: 1200 },
        { name: 'Maio', Matrículas: 3500 },
        { name: 'Junho', Matrículas: 2500 },
        { name: 'Julho', Matrículas: 5500 },
        { name: 'Agosto', Matrículas: 8000 },
        { name: 'Setembro', Matrículas: 3000 },
        { name: 'Outubro', Matrículas: 1200 },
        { name: 'Novembro', Matrículas: 3500 },
        { name: 'Dezembro', Matrículas: 6000 },
    ];

    // Função de formatação para os valores do eixo Y do gráfico (por exemplo, 1000 -> 1mil)
    const formatYAxis = (tick) => {
        if (tick >= 1000) {
            return `${tick / 1000}mil`;
        }
        return tick;
    };

    return (
        <div className="dashboard-container">
            {/* Título e subtítulo do painel de controle */}
            <h1 className="dashboard-title">Seja Bem-Vindo ao Painel</h1>
            <p className="dashboard-subtitle">EMEF Nome da Escola Municipal</p>
            <p className="dashboard-subtitle-user">Sr(a). Secretario(a) Nome</p>

            {/* Seção dos Cards de Estatísticas */}
            <div className="stats-cards-container">
                {stats.map((stat, index) => (
                    <div key={index} className="stat-card-se">
                        <h3 className="stat-card-title">{stat.title}</h3> <br/>
                        <p className="stat-card-value">{stat.value}</p>
                    </div>
                ))}
            </div>

            {/* Seção Principal do Gráfico */}
            <div className="chart-section">
                {/* Abas de Filtro para o Gráfico */}
                <div className="chart-tabs-container">
                    {['Matrículas', 'Matrículas Pendentes', 'Matrículas Aprovadas', 'Matrículas em Análise'].map(tab => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`tab-btn-se ${activeTab === tab ? 'active' : ''}`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* Container do Gráfico */}
                <div className="chart-container">
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
                            <XAxis dataKey="name" stroke="#888" tickLine={false} axisLine={false} />
                            <YAxis stroke="#888" tickLine={false} axisLine={false} tickFormatter={formatYAxis} marginTop={50} />
                            <Tooltip />
                            <Line
                                type="monotone"
                                dataKey="Matrículas"
                                stroke="#EC4899"
                                strokeWidth={2}
                                dot={{ fill: '#EC4899', r: 4 }}
                                activeDot={{ r: 6, stroke: '#EC4899', strokeWidth: 2 }}
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
                <div className="chart-caption">
                    Quantidade de Matrículas: 1.540
                </div>
            </div>
        </div>
    );
};

export default SecretaryDashboard;
