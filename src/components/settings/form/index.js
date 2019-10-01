import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateUser } from '../../../store/actions'


import currency from "../../../containers/dropdown_option/currency";

import './styles.css';

const FormInput = ({label, name, type, onChange}) => (
  <div className="form-input">
      <label>{label}</label>
      <input
        className="input"
        name={name}
        type={type}
        onChange={e => onChange(e)}
      />
  </div>
);

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
  onSubmit = (e, user) => {
    e.preventDefault();
    this.props.dispatch(updateUser(user))
  }
  render() {
    return (
      <div className='form-settings'>
        <form onSubmit={(e) => this.onSubmit(e, this.state)}>
          <FormInput label="First Name" name="firstName" type="text" onChange={this.onHandleChange} />
          <FormInput label="Last Name" name="lastName" type="text" onChange={this.onHandleChange} />
          <FormInput label="Income" name="income" type="number" onChange={this.onHandleChange} />
          <div className="form-input">
            <label>Currency</label>
            <select className="input" name="defaultCurrency" onChange={e => this.onHandleChange(e)}>
              {currency}
            </select>
          </div>
          {/* <button onClick={(e) => this.onSubmit(e,this.state)}>save</button> */}
          <input type="submit" value="Save"></input>
        </form>
      </div>
    )
  }
}

export default connect()(FormSettings)
