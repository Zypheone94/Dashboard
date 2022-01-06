import React, { useState } from 'react'
import { Line } from 'react-chartjs-2';

import './LineChart.scss'

const LineChart = () => {

    let currentDate = new Date()
    let currentMonth = currentDate.getMonth()
    
    let primaryColor = '#FD1F9B'
    let secondaryColor = '#017EFA'

    return (
        <div className="lineChart">
            <div className="container">
                <Line 
                    height={100}
                    width={100}
                    data={{
                        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                        datasets: [
                            {
                                label: 'Med organic reach',
                                data: [110, 100, 149, 125, 110, 125, 140, 150, 138, 141, 150, 136],
                                borderColor: primaryColor,
                                backgroundColor: primaryColor,
                                pointRadius: 5,
                                pointHoverBackgroundColor: 'white',
                                pointHoverRadius: 7,
                                pointHoverBorderWidth: 2.5
                            },
                            {
                                label: 'High paid Reach',
                                data: [55, 68, 63, 57, 72, 72, 85, 74, 58, 76, 74, 88],
                                borderColor: secondaryColor,
                                backgroundColor: secondaryColor,
                                pointRadius: 4.5,
                                pointHoverBackgroundColor: 'white',
                                pointHoverRadius: 7,
                                pointHoverBorderWidth: 2.5
                            },
                        ]
                    }}
                    options={{

                        layout:{

                            padding: {
                                left: -30,
                            }
                        },
                        plugins: {

                            tooltip: {
                                backgroundColor: 'white',
                                bodyColor: 'black',
                                displayColors: false,
                                mode: 'x',
                                titleSpacing: 0,
                                titleMarginBottom: 0,
                                titleColor: 'transparent',
                                boxHeight: '10px',
                                callbacks: {
                                    label: function(tooltipItem) {
                                        return tooltipItem.parsed.y + 'K : ' +  tooltipItem.dataset.label
                                    },
                                    labelTextColor: function(tooltipItem) {
                                        return 'blue';
                                    }
                                },
                            },

                            legend: {
                                display: false,
                            }
                        },

                        maintainAspectRatio: false,

                        scales: {

                            y: {
                                min: 0,
                                max: 200,
                                ticks: {
                                    padding: 30,
                                    stepSize: 50,
                                    callback: function(value, index, values) {
                                        if (value === 0) {
                                            return value
                                        }
                                        return value + 'K'
                                    },
                                    font: {
                                        size: 14
                                    },
                                },
                                grid: {
                                    display: false,
                                    drawBorder: false,
                                },
                                
                            },
                            
                            x: {
                                ticks: {
                                    padding: 5,
                                    color: 'black',
                                    // callback: function(val, index) {
                                    //     // Hide the label of every 2nd dataset
                                    //     return index === currentMonth ? style={color: 'blue'} : style={color: 'red'}
                                    //   }
                                    font: {
                                        size: 14,
                                    }
                                },
                                grid: {
                                    display: false,
                                    drawBorder: false,
                                }
                            },
                            
                            
                        }
                    }}
                />
            </div>
        </div>
    )
}

export default LineChart
