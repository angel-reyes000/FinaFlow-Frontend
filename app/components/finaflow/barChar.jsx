"use client"

import ReactECharts from 'echarts-for-react';

export default function BarChar () {

    const option = {
        title: {
            text: "Gastos semanales"
        },
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
                data: [200, 600, 400, 250, 711, 500, 200],

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