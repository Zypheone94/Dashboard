import React from 'react'
import { Bar } from 'react-chartjs-2'

import './BarChart.scss'

const BarChart = () => {
    return (
        <div className="barChart">
            <div className="container">
                <Bar
                    height={100}
                    width={100}
                    data={{
                        labels: ['Apr 21', 'May 21', 'Jun 21', 'Jul 21', 'Aug 21', 'Sep 21'],
                        datasets: [
                            {
                                label: 'Male',
                                data: [55, 68, 63, 57, 72, 72, 85, 74, 58, 76, 74, 88],
                                backgroundColor: 'rgb(1, 126, 250, 0.4)',
                                borderRadius: {
                                    topLeft: 5,
                                    topRight: 5,
                                },
                                hoverBackgroundColor: 'rgb(1, 126, 250, 1)'
                            },
                            {
                                label: 'Female',
                                data: [110, 100, 149, 125, 110, 125, 140, 150, 138, 141, 150, 136],
                                backgroundColor: 'rgb(81, 203, 255, 0.4)',
                                borderRadius: {
                                    topLeft: 5,
                                    topRight: 5,
                                },
                                hoverBackgroundColor: 'rgb(81, 203, 255, 1)'
                            }
                        ],
                    }}
                    options={{
                        maintainAspectRatio: false,

                        plugins: {
                            legend: {
                                display: false,
                            },
                            
                            tooltip: {
                                enabled: false,
                            }
                        },
                        
                        scales: {
                            y: {
                                min: 0,
                                max: 150,                                
                                ticks: {
                                    stepSize: 50,
                                    callback: function(value, index, values) {
                                        if (value === 0) {
                                            return value
                                        }
                                        return value + 'K'
                                    },
                                    font: {
                                        size: 14
                                    }
                                },
                                grid: {
                                    display: false,
                                }
                            },
                            x: {
                                offset: true,
                            }
                        },
                    }}
                />
            </div>
           
        </div>
    )
}

export default BarChart
