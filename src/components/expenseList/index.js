import React, { useState } from "react";
import { connect } from "react-redux";
import moment from "moment";

import { removeItem } from "../../store/actions";
import delImg from './delete.png';
import settingImg from '../../shared/components/layout/image/settings.png';
import ExpenseModal from '../expenseModal';

import BootstrapTable from 'react-bootstrap-table-next';
import "./styles.css";
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import { getCurrentMonthExpenses } from '../../store/selectors';


const filterItemsBySearch = (items, search) => items.filter((item) => {
  const hasNameMatch = item.name.toLowerCase().includes(search);
  const hasCategoryMatch = item.category.toLowerCase().includes(search);
  const hasDateMatch = moment(item.date).format("MMM Do YY").toLowerCase().includes(search);
  return hasNameMatch || hasCategoryMatch || hasDateMatch;
});


const ExpensesList = props => {

  const filteredExpense = filterItemsBySearch(props.items || [], props.search.toLowerCase());
  const onRemoveItem = id => props.dispatch(removeItem(id));
  const onEditItem = id => setEditId(id);

  const [editId, setEditId] = useState(null);

  const tableColumns = [
    { dataField: 'name',  text: 'Name', sort: true },
    { dataField: 'date',  text: 'Date', sort: true, formatter: dt => moment(dt).format("MMM Do YY") },
    { dataField: 'category',  text: 'Category', sort: true },
    { dataField: 'amount',  text: 'Amount', sort: true, formatter: am => `${am} ${props.currency}` },
    { dataField: 'notes',  text: 'Notes', sort: true},
    { dataField: 'actions',  classes: 'td-remove', isDummyField: true, text: 'Actions', formatter: (col, row) => (
      <>
        <img src={delImg} alt="delete" onClick={() => onRemoveItem(row.id)} />
        <img src={settingImg} alt="Edit" onClick={() => onEditItem(row.id)} />
      </>
    )},
  ];

  return (
    <div className="expenses-container">
      {filteredExpense.length !== 0 ? (
        <BootstrapTable keyField='id' data={filteredExpense} columns={tableColumns} classes="expense-props" bootstrap4 />
      ) : (
        <h2 className="text-center p-2">You have no expenses</h2>
      )}
      {editId && <ExpenseModal editId={editId} onCreateBudget={() => setEditId(null)} />}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    items: getCurrentMonthExpenses(state),
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
