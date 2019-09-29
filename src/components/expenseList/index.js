import React, { useState } from "react";
import { connect } from "react-redux";
import moment from "moment";

import { removeItem } from "../../store/actions";
import delImg from './delete.png';
import settingImg from '../../shared/components/layout/image/settings.png';
import ExpenseModal from '../expenseModal';

import "./styles.css";

const filterItemsBySearch = (items, search) => items.filter((item) => {
  const hasNameMatch = item.name.toLowerCase().includes(search);
  const hasCategoryMatch = item.category.toLowerCase().includes(search);
  const hasDateMatch = moment(item.date).format("MMM Do YY").toLowerCase().includes(search);
  return hasNameMatch || hasCategoryMatch || hasDateMatch;
});

const ExpensesList = props => {
  const onRemoveItem = id => {
    props.dispatch(removeItem(id));
  };

  const [editId, setEditId] = useState(null);
  const onEditItem = id => setEditId(id);
  const filteredExpense = filterItemsBySearch(props.items || [], props.search.toLowerCase());
  
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
            <td className='td-remove'>
              <img height="15" width="15" src={delImg} alt="delete" onClick={() => onRemoveItem(id)} />
              <img height="15" width="15" src={settingImg} alt="Edit" onClick={() => onEditItem(id)} />
            </td>
          </tr>
        );
      })
      : null;
  };
  const renderTableHeader = () => {
    const header = ["Name", "Date", "Category", "Amount", "Notes", 'Actions'];
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
      {editId && <ExpenseModal editId={editId} onCreateBudget={() => setEditId(null)} />}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    items: state.budgetReducer,
    currency: state.user.defaultCurrency
  };
};

export default connect(mapStateToProps)(ExpensesList);

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
