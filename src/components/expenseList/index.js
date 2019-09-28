import React from "react";
import { connect } from "react-redux";
import moment from "moment";

import { removeItem } from "../../store/actions";
import del_img from './delete.png';

import "./styles.css";

const expensesList = props => {
  const onRemoveItem = id => {
    props.dispatch(removeItem(id));
  };
  let filteredExpense = props.items
    ? props.items.filter(item => {
      return (
        item.name.toLowerCase().indexOf(props.search.toLowerCase()) !== -1 ||
        item.category.toLowerCase().indexOf(props.search.toLowerCase()) !== -1 ||
        moment(item.date).format("MMM Do YY").toLowerCase().indexOf(props.search.toLowerCase()) !== -1
      );
    })
    : null;
  const renderTableData = () => {
    return props.items
      ? filteredExpense.map(item => {
        const { id, name, date, category, amount, notes } = item;
        return (
          <tr key={id}>
            <td>{name}</td>
            <td>{moment(date).format("MMM Do YY")}</td>
            <td>{category}</td>
            <td>{amount} {props.currency}</td>
            <td>{notes}</td>
            <td className='td-remove' onClick={() => onRemoveItem(id)}><img src={del_img} alt='delete' /></td>
          </tr>
        );
      })
      : null;
  };
  const renderTableHeader = () => {
    const header = ["Name", "Date", "Category", "Amount", "Notes", 'Delete'];
    return props.items.length > 0 ? (
      header.map((key, index) => {
        return <th key={index}>{key}</th>;
      })
    ) : (
        <th className="else-container">You have no expenses</th>
      );
  };

  return (
    <div className="expenses-container">
      <table
        className={props.items.length > 0 ? "expense-props" : "else-container"}
      >
        <tbody>
          <tr>{renderTableHeader()}</tr>
          {renderTableData()}
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    items: state.budgetReducer,
    currency: state.user.defaultCurrency
  };
};

export default connect(mapStateToProps)(expensesList);

/* <div className="expenses-container">
{props.items.length > 0 ? (
  <div className="expense-card">
    <h4>name</h4>
    <h4>date</h4>
    <h4>category</h4>
    <h4>notes</h4>
    <h4>total {totalAmpount}</h4>
  </div>
) : <div className='else-container'><h4>expense is empty</h4></div>}
{props.items
  ? filteredExpense.map(item => {
    return (
      <div className="expense-card" key={item.id}>
        <h3>{item.name}</h3>
        <h3>{moment(item.date).format("MMM Do YY")}</h3>
        <h3>{item.category}</h3>
        <h3>{item.notes}</h3>
        <h3>
          {item.amount}
          {item.currency}
        </h3>
        <button onClick={() => onRemoveItem(item.id)}>x</button>
      </div>
    );
  })
  : null}
</div> */
