"use client"

import ReactECharts from 'echarts-for-react';

export default function LineChart () {

    const option = {

        xAxis: {
            type: 'category',
            data: [
                'semana 1',
                'semana 2',
                'semana 3',
                'semana 4',
                'semana 5',
                'semana 6',
                'semana 7',
            ]
        },

        yAxis: {
            type: 'value'
        },

        series: [
            {
                type: 'line',
                data: [10, 25, 18, 40, 30, 10, 40,],
                smooth: false,
                areaStyle: {}
            }
        ]

    }

    return (
        <ReactECharts option={option} style={{ width: '100%', height: '300px'}}/>
    )
}