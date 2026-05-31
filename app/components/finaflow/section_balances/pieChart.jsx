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
                {
                    value: 100.00,
                    name: "Efectivo",
                    itemStyle: { color: 'rgb(76, 255, 121)' }
                },
                {
                    value: 200.00,
                    name: "Tarjetas de credito",
                    itemStyle: { color: 'rgb(132, 239, 255)' }
                },
                {
                    value: 60.00,
                    name: "Tarjetas de debito",
                    itemStyle: { color: 'rgb(255, 132, 132)' }
                },
                {
                    value: 320.00,
                    name: "Ahorros",
                    itemStyle: { color: 'rgb(243, 255, 131)' }
                },
                {
                    value: 350.00,
                    name: "Otros",
                    itemStyle: { color: 'rgb(182, 182, 182)' }
                }
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
        <ReactECharts option={option} style={{width: '100%', height: '500px'}}/>
    )
}