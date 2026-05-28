"use client"

import ReactECharts from 'echarts-for-react';

export default function BarChar () {

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
                data: [200, 600, 400, 250, 711, 500, 200, 100, 600, 890, 300, 200, 700],

                type: 'bar',

                itemStyle: {
                    color: {
                        type: 'linear',

                        x: 0,
                        y: 0,

                        x2: 0,
                        y2: 1,

                        colorStops: [
                            {
                                offset: 0,
                                color: 'rgb(1, 255, 225)'
                            },
                            {
                                offset: 1,
                                color: 'rgb(0, 78, 69)'
                            }
                        ]
                    }
                }
            }
        ]
    }

    return (
        <ReactECharts option={option} style={{ width: '100%', height: '500px'}}/>
    )
}