import React, { useState } from "react";

import NewBudget from '../../../../components/newExpense'
import "./styles.css";
import {withRouter} from 'react-router-dom';

const SideBar = ({ history }) => {
  const [showCreate, setShowCreate] = useState(false);
  const onCreateBudget = () => {
    setShowCreate(!showCreate);
  };
  return (
    <>
      <div className="sidenav">
        <button onClick={() => history.push('/')}>Home</button>
        <button onClick={() => onCreateBudget()}>Add Expense</button>
        <button onClick={() => history.push('/Report')}>Expense List</button>
        <button onClick={() => history.push('/Settings')}>Settings</button>
      </div>
      {
        showCreate ?
          <NewBudget onCreateBudget={onCreateBudget} /> :
          null
      }
    </>
  );
}

export default withRouter(SideBar);
