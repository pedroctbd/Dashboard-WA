import React, { useEffect, useState } from 'react';
import { Doughnut } from 'react-chartjs-2'
import { Chart, registerables } from 'chart.js';
import { DoughnutChartProp } from '../models';

const DoughnutChart: React.FunctionComponent<DoughnutChartProp> = ({ data }) => {
    Chart.register(...registerables);
    // ChartsJs.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);
    const [chartData, setChartData]: any = useState({ datasets: [], })

    const [chartOptions, setChartOptions] = useState({});
    useEffect(() => {
        setChartData({
            labels: [data],
            datasets: [
                {
                    label: "Valor Gerado em R$",
                    data: [12],
                    backgroundColor: 'rgba(50,222,132,0.4)',
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
                    text: "Valor Gerado em R$",
                }
            }
        })
    }, [])
    return (

        <Doughnut options={chartOptions} data={chartData} ></Doughnut>
    );
}

export default DoughnutChart;
