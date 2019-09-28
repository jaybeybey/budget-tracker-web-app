import React, { Component } from "react";
import { connect } from "react-redux";
import Chart from "react-apexcharts";

import "./styles.css";

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

  renderTable = () => {
    if (this.props.items.length > 0) {
      let totals = {};
      this.categories.forEach(category => {
        return (totals[category] = 0);
      });
      this.props.items.forEach(item => {
        let total = 0;
        let value = parseInt(item.amount);
        totals[item.category] += value;
        return (total += value);
      });
      return this.categories.map((category, index) => {
        return (
          <div className="tr" key={index}>
            <div className="td">{category}</div>
            <div className="td">{totals[category]}</div>
          </div>
        );
      });
    }
  };

  totalAmount = () => {
    return this.props.items
      ? this.props.items
        .map(item => parseInt(item.amount))
        .reduce((a, c) => a + c, 0)
      : null;
  };

//   computeBudgetMax = () => {
//     if (this.props.items.length > 0) {
//       let totals = {};
//       let findBudget = {};
//       this.categories.forEach(category => {
//         return (totals[category] = 0);
//       });
//       this.props.items.forEach(item => {
//         let total = 0;
//         let value = parseInt(item.amount);
//         totals[item.category] += value;
//         return (total += value);
//       });
//     }
//   }

  render() {
    return (
      <div className="outer-container">
        <div className="chart-contianer">
          <div className="report-card">
            <div className="table">
              <div className="th">
                <div className="td">Categories</div>
                <div className="td">Amount</div>
              </div>
              {this.renderTable()}
              {this.computeBudgetMax()}
              <div className="total-td">Spendings</div>
              <p>{this.totalAmount()}</p>
            </div>
          </div>
          <div className="donut">
            <Chart
              options={this.state.options}
              series={this.computeSeries()}
              type="pie"
              width="380"
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    items: state.reducer,
    budget: state.newBudget
  };
};

export default connect(mapStateToProps)(BreakDownChart);
