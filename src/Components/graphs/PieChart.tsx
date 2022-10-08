import React, { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2'
import { Chart, registerables } from 'chart.js';
import { PieChartProp } from '../models';

const PieChart: React.FunctionComponent<PieChartProp> = ({ data }) => {
    Chart.register(...registerables);
    // ChartsJs.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);
    const [chartData, setChartData]: any = useState({ datasets: [], })

    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        setChartData({
            labels: [data],
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
