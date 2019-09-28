import React, { Component } from "react";
import { connect } from "react-redux";
import "./styles.css";
import uuid from "uuid";

import { addNewBudget } from "../../store/actions";

import category from "../../containers/dropdown_option/category";

class NewBudget extends Component {
  state = {
    id: uuid(),
    name: "",
    amount: 0,
    date: "",
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
  };
  dateDefaultVal = () => {
    return new Date().toISOString().slice(0, 10);
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
                  defaultValue={this.dateDefaultVal()}
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

export default connect()(NewBudget);
