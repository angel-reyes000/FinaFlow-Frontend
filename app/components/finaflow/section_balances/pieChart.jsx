"use client"

import ReactECharts from 'echarts-for-react';

export default function PieChart () {

    const option = {
        tooltip: {
            trigger: "item",
        },
        legend: {
            orient: "horizontal",
            left: "center",
            bottom: 0,
        },
        series: [
        {
            type: "pie",
            radius: "80%",
            data: [
            { value: 100.00, name: "Efectivo" },
            { value: 200.00, name: "Tarjetas de credito" },
            { value: 60.00, name: "Tarjetas de debito" },
            { value: 320.00, name: "Ahorros" },
            { value: 350.00, name: "Otros" },
            ],
            label: {
                show: true,
                position: "inside",
                formatter: "{d}%"
            },
            emphasis: {
            itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
            },
            },
        },
        ],
    };

    return (    
        <ReactECharts option={option} style={{width: '100%', height: '400px'}}/>
    )
}