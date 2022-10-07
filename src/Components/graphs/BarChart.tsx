import React, { Component, useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2'
import { Chart, registerables } from 'chart.js';

const BarChart: React.FunctionComponent = () => {
    Chart.register(...registerables);
    // ChartsJs.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);
    const [chartData, setChartData]: any = useState({ datasets: [], })

    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        setChartData({
            labels: ["John", "Kevin", "George", "michael"],
            datasets: [
                {
                    label: "Top 5 Pedidos por valor",
                    data: [12, 55, 12, 31],
                    borderColor: 'rgb(55,162,200)',
                    backgroundColor: 'rgba(53,162,235,0.4)'
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
                    text: "Top 5 Pedidos por valor",
                }
            }
        })
    }, [])
    return (

        <Bar options={chartOptions} data={chartData} ></Bar>
    );
}

export default BarChart;
