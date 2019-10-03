import React, { Component } from "react";
import { connect } from "react-redux";
import Chart from "react-apexcharts";
import { getCurrentMonthExpenses } from '../../../../store/selectors';

class BreakDownChart extends Component {
  categories = ["Fees", "Rent", "Taxes", "Entertainment", "Grocery"];

  state = {
    options: {
      chart: {
        width: 380,
        type: "pie"
      },
      labels: ["Fees", "Rent", "Taxes", "Entertainment", "Grocery"],
      series: [32, 22, 12, 45, 13],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    },
    showChart: false
  };

  computeSeries = () => {
    if (this.props.items.length > 0) {
      let totals = {};
      this.categories.forEach(category => {
        totals[category] = 0;
      });
      let total = 0;
      this.props.items.forEach(item => {
        let value = parseInt(item.amount);
        totals[item.category] += value;
        total += value;
      });
      return this.categories.map(category =>
        parseInt((100 * totals[category]) / total)
      );
    } else {
      return [0, 0, 0, 0, 0];
    }
  };

  render() {
    return (
      <div className="donut-chart">
        <Chart
          options={this.state.options}
          series={this.computeSeries()}
          type="pie"
          width="380"
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    items: getCurrentMonthExpenses(state),
    budget: state.newBudget
  };
};

export default connect(mapStateToProps)(BreakDownChart);
