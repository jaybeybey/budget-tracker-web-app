import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateUser } from '../../../store/actions'


import currency from "../../../containers/dropdown_option/currency";

import './styles.css'


class FormSettings extends Component {
  state = {
      firstName: '',
      lastName: '',
      income: 0,
      defaultCurrency: ''
  }
  
  onHandleChange = e => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  };
 onSubmit = (e,user) => {
  e.preventDefault();
  this.props.dispatch(updateUser(user))
}
  render() {
    return (
      <div className='form-settings'>
        <form onSubmit={(e) => this.onSubmit(e,this.state)}>
          <label>First Name</label>
          <input
            name="firstName"
            type='text'
            onChange={e => this.onHandleChange(e)}
          />
          <label>Last Name</label>
          <input
            name="lastName"
            type='text'
            onChange={e => this.onHandleChange(e)}
          />
          <label>Income</label>
          <input
            name="income"
            type='number'
            onChange={e => this.onHandleChange(e)}
          />
          <label>Currency</label>
          <select name="defaultCurrency" onChange={e => this.onHandleChange(e)}>
            {currency}
          </select>
          {/* <button onClick={(e) => this.onSubmit(e,this.state)}>save</button> */}
          <input type="submit" value="Save"></input>
        </form>
      </div>
    )
  }
}

export default connect()(FormSettings)
