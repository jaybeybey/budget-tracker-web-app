import React, { Component } from "react";
import { connect } from "react-redux";
import Chart from "react-apexcharts";

import "./styles.css";

class Donut extends Component {
  categories = ["Fees", "Rent", "Taxes", "Entertainment", "Utilities"];

  state = {
    options: {
      chart: {
        width: 380,
        type: "pie"
      },
      labels: ["Fees", "Rent", "Taxes", "Entertainment", "Utilities"],
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

  render() {
    return (
      <div className="outer-container1">
        <div className="chart-contianer1">
          <div className="report-card1">
            <h3>Monthy Report</h3>
            <div className="table1">
              <div className="th1">
                <div className="td1">Categories</div>
                <div className="td1">Amount</div>
              </div>
              {this.renderTable()}
              <div className="total-td1">Total</div>
              <p>{this.totalAmount()}</p>
            </div>
          </div>
          <div className="donut1">
            <Chart
              options={this.state.options}
              series={this.computeSeries()}
              type="pie"
              width="380"
            />
          </div>
        <button className="x-report" onClick={this.props.onShowChart}>x</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    items: state
  };
};

export default connect(mapStateToProps)(Donut);
