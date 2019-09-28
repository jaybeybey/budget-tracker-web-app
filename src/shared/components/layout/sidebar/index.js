import React, { useState } from "react";
import { Link } from 'react-router-dom';

import NewBudget from '../../../../components/newExpense'
import "./styles.css";


export default function SideBar() {
  const [showCreate, setShowCreate] = useState(false);
  const onCreateBudget = () => {
    setShowCreate(!showCreate);
  };
  return (
    <>
      <div className="sidenav">
        <Link to='/'><button>Home</button></Link>
        <button onClick={() => onCreateBudget()}>Add Expense</button>
        <Link to='/Report'><button>Expense List</button></Link>
        <Link to='/Settings'><button>Settings</button></Link>
      </div>
      {
        showCreate ?
          <NewBudget onCreateBudget={onCreateBudget} /> :
          null
      }
    </>
  );
}
