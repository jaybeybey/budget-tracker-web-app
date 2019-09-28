import React, { Component } from "react";
import ReactApexChart from "react-apexcharts";

export default class SpendingChart extends Component {
    state = {
        options: {
            chart: {
                offsetY: -20
            },
            plotOptions: {
                radialBar: {
                    startAngle: -90,
                    endAngle: 90,
                    track: {
                        background: "#e7e7e7",
                        strokeWidth: '99%',
                        margin: 5, // margin is in pixels
                        shadow: {
                            enabled: true,
                            top: 2,
                            left: 0,
                            color: '#999',
                            opacity: 1,
                            blur: 2
                        }
                    },
                    dataLabels: {
                        name: {
                            show: true,
                            fontSize: '20px',
                        },
                        value: {
                            offsetY: -50,
                            fontSize: '15px'
                        }
                    }
                }
            },
            fill: {
                type: 'gradient',
                gradient: {
                    shade: 'light',
                    shadeIntensity: 0.4,
                    inverseColors: false,
                    opacityFrom: 1,
                    opacityTo: 1,
                    stops: [0, 50, 53, 91]
                },
            },
            labels: ['Spendings'],
        },
        // series: [this.props.totalSpending],
    }
    componentDidUpdate() {
        this.computeSeries();
    }
    computeSeries = () => {
        return [((this.props.totalSpending / this.props.income) * 100).toFixed(1)]
    }
    render() {
        return (
            <div id="chart" >
                <ReactApexChart options={this.state.options} series={this.computeSeries()} type="radialBar" height="350" />
                {/* <h3>Spendings</h3> */}
            </div>
        );
    }
}