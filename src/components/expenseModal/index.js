import React, { Component } from "react";
import { connect } from "react-redux";
import "./styles.css";
import uuid from "uuid";

import { addNewExpense, updateExpense } from "../../store/actions";

import categories from "../../containers/dropdown_option/category";

class ExpenseModal extends Component {

  static defaultProps = {
    editId: false,
  }

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

  componentDidMount() {
    const { editId, items } = this.props;
    const editBudget = items.find(item => item.id === editId);
    if (!editBudget)  {
      return;
    }
    this.setState(editBudget);
  }

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
    const isValid = this.validate();    
    if (!isValid) {
      return;
    }

    let items = this.props.items;
    const {budgets} = this.props;

    if (this.props.editId) {
      this.props.dispatch(updateExpense(newExpense));
      items = items.map(item => item.id === newExpense.id ? newExpense : item);
    } else  {
      this.props.dispatch(addNewExpense(newExpense));
      items = items.concat([newExpense]);
    }
    
    // Show alert when the budget category exceeds 100%.
    let total = 0;
    const budget = budgets.find(budget => budget.category === newExpense.category);
    items.filter(item => item.category === newExpense.category).forEach(item => total += Number(item.amount));
    total = total * 100 / budget.amount;
    if (total >= 100) {
      alert(`The budget ${newExpense.category} exceed 100% of its capacity.`);
    }
    

    this.props.onCreateBudget();
  };

  
  render() {
    const { name, amount, date, category, notes } = this.state;

    return (
      <div className="ext-budget">
        <div className="int-budget">
          <button className='x' onClick={this.props.onCreateBudget}>x</button>
          <div className="budget-form">
            <form>
              <div className="row">
                <div className="col-6">
                  <label>Name</label>
                </div>
                <div className="col-6">
                  <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={e => this.onHandleChange(e)}
                  />
                </div>
                <div className="col-12">
                  <div className="error text-center">{this.state.nameError}</div>
                </div>
                <div className="col-6">
                  <label>Amount</label>
                </div>
                <div className="col-6">
                  <input
                    type="number"
                    name="amount"
                    value={amount}
                    onChange={e => this.onHandleChange(e)}
                  />
                </div>
                <div className="col-12">
                  <div className="error text-center">{this.state.nameError}</div>
                </div>
              </div>
              <div className='inpt-date-category'>
                {/* <label>Category</label> */}
                <select name="category" value={category} onChange={e => this.onHandleChange(e)}>
                  {categories}
                </select>
                <div className="error text-center">{this.state.categoryError}</div>
                {/* <label>Date</label> */}
                <input
                  type="date"
                  name="date"
                  value={date}
                  onChange={e => this.onHandleChange(e)}
                />
                <div className="error">{this.state.dateError}</div>
              </div>
              <div className='inpt-note'>
                <label>Notes</label>
                <textarea
                  name="notes"
                  value={notes}
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

const mapStateToProps = state => ({ items: state.budgetReducer, budgets: state.newBudget });

export default connect(mapStateToProps)(ExpenseModal);
