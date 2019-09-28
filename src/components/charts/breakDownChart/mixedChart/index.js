import React, { Component } from "react";
import ReactApexChart from "react-apexcharts";

export default class MixedChart extends Component {
            
  constructor(props) {
    super(props);

    this.state = {
      options: {
        plotOptions: {
          bar: {
            dataLabels: {
              position: 'top', // top, center, bottom
            },
          }
        },
        dataLabels: {
          enabled: true,
          formatter: function (val) {
            return val + "%";
          },
          offsetY: -20,
          style: {
            fontSize: '12px',
            colors: ["#304758"]
          }
        },
        xaxis: {
          categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
          position: 'top',
          labels: {
            offsetY: -18,
          },
          axisBorder: {
            show: false
          },
          axisTicks: {
            show: false
          },
          crosshairs: {
            fill: {
              type: 'gradient',
              gradient: {
                colorFrom: '#D8E3F0',
                colorTo: '#BED1E6',
                stops: [0, 100],
                opacityFrom: 0.4,
                opacityTo: 0.5,
              }
            }
          },
          tooltip: {
            enabled: true,
            offsetY: -35,
          }
        },
        fill: {
          gradient: {
            shade: 'light',
            type: "horizontal",
            shadeIntensity: 0.25,
            gradientToColors: undefined,
            inverseColors: true,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [50, 0, 100, 100]
          },
        },
        yaxis: {
          axisBorder: {
            show: false
          },
          axisTicks: {
            show: false,
          },
          labels: {
            show: false,
            formatter: function (val) {
              return val + "%";
            }
          }
        },
        title: {
          text: 'Monthly Inflation in Argentina, 2002',
          floating: true,
          offsetY: 320,
          align: 'center',
          style: {
            color: '#444'
          }
        }
      },
      series: [{
        name: 'Inflation',
        data: [2.3, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2, 2.3, 1.4, 0.8, 0.5, 0.2]
      }],
    }
  }

  render() {
    return (
      

      <div id="chart">
        <ReactApexChart options={this.state.options} series={this.state.series} type="bar" height="350" />
      </div>


    );
  }
}
  //   constructor(props) {
  //     super(props);

  //     this.state = {
  //       options: {
  //         stroke: {
  //           curve: 'smooth'
  //         },
  //         fill: {
  //           type: 'solid',
  //           opacity: [0.35, 1],
  //         },
  //         labels: ['Dec 01', 'Dec 02', 'Dec 03', 'Dec 04', 'Dec 05', 'Dec 06', 'Dec 07', 'Dec 08', 'Dec 09 ',
  //           'Dec 10', 'Dec 11'
  //         ],
  //         markers: {
  //           size: 0
  //         },
  //         yaxis: [{
  //             title: {
  //               text: 'Series A',
  //             },
  //           },
  //           {
  //             opposite: true,
  //             title: {
  //               text: 'Series B',
  //             },
  //           },
  //         ],
  //         tooltip: {
  //           shared: true,
  //           intersect: false,
  //           y: {
  //             formatter: function (y) {
  //               if (typeof y !== "undefined") {
  //                 return y.toFixed(0) + " points";
  //               }
  //               return y;

  //             }
  //           }
  //         }
  //       },
  //       series: [{
  //         name: 'TEAM A',
  //         type: 'area',
  //         data: [44, 55, 31, 47, 31, 43, 26, 41, 31, 47, 33]
  //       }, {
  //         name: 'TEAM B',
  //         type: 'line',
  //         data: [55, 69, 45, 61, 43, 54, 37, 52, 44, 61, 43]
  //       }],
  //     }
  //   }

  //   render() {
  //     return (
        

  //       <div id="chart">
  //         <ReactApexChart options={this.state.options} series={this.state.series} type="line" height="350" />
  //       </div>


  //     );
  //   }
  // }