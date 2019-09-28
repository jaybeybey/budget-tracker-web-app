import React from "react";
import { connect } from 'react-redux'

import "./styles.css";
import logo from './budget.png'

const Expense = (props) => {
  const userName = () => {
    return (
      <div className='user-container'>
        <h3>{props.user.firstName} {props.user.lastName}</h3>
      </div>
    )
  }
  return (
    <div className="header">
      <div className="web-wallet">
        <img src={logo} alt='Logo' />
        <h2>Web<span>Wallet</span></h2>
      </div>
      {userName()}
    </div>
  );
};

const mapStateToProps = (props) => {
  return {
    user: props.user
  }
}

export default connect(mapStateToProps)(Expense);
