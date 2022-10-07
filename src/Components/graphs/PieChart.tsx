import React, { Component, useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2'
import { Chart, registerables } from 'chart.js';

const PieChart: React.FunctionComponent = () => {
    Chart.register(...registerables);
    // ChartsJs.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);
    const [chartData, setChartData]: any = useState({ datasets: [], })

    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        setChartData({
            labels: ["Equipes"],
            datasets: [
                {
                    label: "Equipes Registradas",
                    data: [5],
                    backgroundColor: 'rgba(200,162,235,0.4)',
                    hoverOffset: 4
                },
            ],
        });
        setChartOptions({
            responsive: true,
            plugins: {
                legend: {
                    position: "top"
                },
                title: {
                    display: true,
                    text: "Equipes Registradas",
                }
            }
        })
    }, [])
    return (

        <Pie options={chartOptions} data={chartData} ></Pie>
    );
}

export default PieChart;
