import React from "react";
import { connect } from "react-redux";
import ReactApexChart from "react-apexcharts";

const createBudgetList = (initialBudget, expenses, savings) => {
  const list = [initialBudget];
  let budget = initialBudget;
  expenses.forEach((expense) => {
    budget -= Number(expense.amount);
    list.push(budget);
  });
  savings.forEach((saving) => {
    budget -= Number(saving.amount);
    list.push(budget);
  });
  return list;
};

const Chart = ({ initialBudget, expenses, savings }) => {
  const spendArray = expenses.concat(savings).map(item => `Spent ${item.amount} ${item.currency || ''} in "${item.name}"`);
  spendArray.unshift('Initial Budget');

  const budgetList = createBudgetList(initialBudget, expenses, savings);
  return (
    <ReactApexChart
      options={{
        plotOptions: {
          bar: {
            dataLabels: {
              position: 'top',
            },
          }
        },
        dataLabels: {
          enabled: true,
          offsetY: -20,
          style: {
            fontSize: '12px',
            colors: ["#304758"]
          }
        },
        yaxis: {
          axisBorder: {show: false},
          axisTicks: {show: false},
          crosshairs: {show: false},
          labels: {show: false},
        },
        xaxis: {
          categories: spendArray,
          axisBorder: {show: false},
          axisTicks: {show: false},
          crosshairs:{show: false},
          labels: {show: false},
        },
        title: {
          text: 'Initial budget changes, including expenses and savings.',
          offsetY: 341,
          floating: true,
          align: 'center',
          style: {
            color: '#444'
          }
        }
      }}
      series={[{
        name: 'Budget',
        data: budgetList
      }]}
      type="bar"
      height="360"
    />
  )
}

const mapStateToProps = state => ({
  expenses: state.budgetReducer,
  savings: state.newSavings,
  initialBudget: state.user.income,
});

export default connect(mapStateToProps)(Chart);


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