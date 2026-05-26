"use client"

import ReactECharts from 'echarts-for-react';

export default function PieChart () {

    const option = {
        title: {
            text: '85%', 
            subtext: 'utilizado',
            left: 'center',
            top: 'center',
            textStyle: {
                fontSize: 30,
                fontWeight: 'bold',
                color: 'black'
            },
            subtextStyle: {
                fontSize: 20,
                color: 'black'
            },
        },
        color: [
            '#00bcd4',
            '#ff9800',
            '#4caf50'
        ],
        series: [
            {
                type: 'pie',
                radius: ['50%', '70%'],
                label: {
                    show: false
                },
                labelLine: {
                    show: false
                },
                data: [
                    {value: 50, name: 'Alimentos'},
                    {value: 30, name: 'Transporte'},
                    {value: 20, name: 'Otros'},
                ]
            },
        ]
    }

    return (
        <ReactECharts option={option} />
    )
}