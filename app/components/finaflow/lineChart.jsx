"use client"

import ReactECharts from 'echarts-for-react';

export default function LineChart () {

    const option = {

        xAxis: {
            type: 'category',
            data: [
                'January',
                'Febrary',
                'March',
                'April',
                'May',
                'June',
                'July',
                'August',
                'September',
                'October',
                'November',
                'Dicember'
            ]
        },

        yAxis: {
            type: 'value'
        },

        series: [
            {
                type: 'line',
                data: [10, 25, 18, 40, 30, 10, 40, 70, 20],
                smooth: false,
                areaStyle: {}
            }
        ]

    }

    return (
        <ReactECharts option={option} style={{ width: '100%', height: '500px'}}/>
    )
}