import React, { Component } from "react";
import { connect } from "react-redux";
import "./styles.css";
import uuid from "uuid";

import { store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css'

import { addNewBudget } from "../../store/actions";

import category from "../../containers/dropdown_option/category";

class NewBudget extends Component {
  state = {
    id: uuid(),
    name: "",
    amount: 0,
    date: new Date().toISOString().slice(0, 10),
    category: "",
    notes: "",
    nameError: "",
    amountError: "",
    currencyError: "",
    dateError: "",
    categoryError: ""
  };
  validate = () => {
    let nameError = "";
    let amountError = "";
    let dateError = "";
    let categoryError = "";
    if (!this.state.name) {
      nameError = "name is empty";
    }
    if (this.state.amount <= 0) {
      amountError = "amount is invalid";
    }
    if (!this.state.date) {
      dateError = "date not selected";
    }
    if (!this.state.category) {
      categoryError = "please choose a category";
    }
    if (
      nameError ||
      amountError ||
      dateError ||
      categoryError
    ) {
      this.setState({
        nameError,
        amountError,
        dateError,
        categoryError
      });
      return false;
    }
    return true;
  };
  onHandleChange = e => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  onHandleSave = newExpense => {
    const inValid = this.validate();
    if (inValid) {
      this.props.dispatch(addNewBudget(newExpense));
      this.props.onCreateBudget();
    }

    // Show alert when the budget category exceeds 100%.
    let total = 0;
    this.props.items.filter(item => item.category === this.state.category).forEach(item => total += item.amount);
    total = total * 100 / this.state.amount;
    if (total >= 100) {
      this.budgetNotification(`The budget ${this.state.category} exceed 100% of its capacity.`);
    }
  };


  budgetNotification = (alert) => {
    store.addNotification({
      title: "Notification",
      message: alert,
      type: "warning",
      insert: "top",
      container: "top-right",
      animationIn: ["animated", "fadeIn"],
      animationOut: ["animated", "fadeOut"],
      dismiss: {
        duration: 5000,
        onScreen: true
      },
    });
  }

  render() {
    return (
      <div className="ext-budget">
        <div className="int-budget">
          <button className='x' onClick={this.props.onCreateBudget}>x</button>
          <div className="budget-form">
            <form>
              <div className='inpt-name-amount'>
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  onChange={e => this.onHandleChange(e)}
                />
                <div className="error">{this.state.nameError}</div>
                <label>Amount</label>
                <input
                  type="number"
                  name="amount"
                  onChange={e => this.onHandleChange(e)}
                />
                <div className="error">{this.state.amountError}</div>
              </div>
              <div className='inpt-date-category'>
                {/* <label>Category</label> */}
                <select name="category" onChange={e => this.onHandleChange(e)}>
                  {category}
                </select>
                <div className="error">{this.state.categoryError}</div>
                {/* <label>Date</label> */}
                <input
                  type="date"
                  name="date"
                  defaultValue={this.state.date}
                  onChange={e => this.onHandleChange(e)}
                />
                <div className="error">{this.state.dateError}</div>
              </div>
              <div className='inpt-note'>
                <label>Notes</label>
                <textarea
                  name="notes"
                  onChange={e => this.onHandleChange(e)}
                  placeholder="type here..."
                ></textarea>
              </div>
            </form>
          </div>
          <button className='save-btn' onClick={() => this.onHandleSave(this.state)}>save</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({ items: state.budgetReducer });

export default connect(mapStateToProps)(NewBudget);
