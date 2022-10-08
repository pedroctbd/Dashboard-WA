import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2'
import { Chart, registerables } from 'chart.js';
import { DataProp } from '../datatable/Datatable';
import { Produto } from '../models';


interface ChartData {
    id: number,
    idPedido: number,
    IdProduto: number,
    pedido: string,
    produto: Produto,
}

const BarChart: React.FunctionComponent<DataProp> = ({ data }) => {
    Chart.register(...registerables);
    // ChartsJs.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);
    const [chartInfo, setChartInfo]: any = useState();
    const [chartInfoLabel, setChartInfoLabel]: any = useState();
    const [chartData, setChartData]: any = useState({ datasets: [], })
    const [chartOptions, setChartOptions] = useState({});

    const populateChart = (data: any) => {
        let value: any = [];
        let valueLabel: any = [];
        data.forEach((element: ChartData) => {
            value.push(element.produto.valor)
            valueLabel.push(element.idPedido.toString())
        });
        setChartInfo(value);
        setChartInfoLabel(valueLabel);
    };

    useEffect(() => {
        if (data) populateChart(data);
    }, [data]);

    useEffect(() => {
        setChartData({
            labels: chartInfoLabel,
            datasets: [
                {
                    label: "Valor",
                    data: chartInfo,
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
    }, [chartInfo])
    return (
        <Bar options={chartOptions} data={chartData} ></Bar>
    );
}

export default BarChart;
