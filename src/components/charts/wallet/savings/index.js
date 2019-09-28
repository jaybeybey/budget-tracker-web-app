import React, { Component } from 'react'
import { connect } from 'react-redux'

import './styles.css'

import { newSavings } from '../../../../store/actions'

class Budget extends Component {
    state = {
        savingsName: '',
        color: '',
        amount: '',
        notes: ''
    }
    onHandleChange = e => {
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value
        });
    };
    onHandleSave = data => {
        this.props.dispatch(newSavings(data));
        this.props.onSavingsModal();
    };
    render() {
        return (
            <div className='ext-budget-modal'>
                <div className='int-budget-modal'>
                    <button className='x' onClick={this.props.onSavingsModal}>x</button>
                    <form>
                        <span className="formtext">&#x3C;SAVINGS/&#x3E;</span>
                        <div className='name-color'>
                            <label name='savingsName'>Name</label>
                            <input
                                name='savingsName'
                                type="text"
                                placeholder="Savings Name"
                                onChange={e => this.onHandleChange(e)}
                                required
                            />
                            <label name='color'>Color</label>
                            <input
                                type="color"
                                name='color'
                                onChange={e => this.onHandleChange(e)}
                            />
                        </div>
                        <label name='amount'>Amount</label>
                        <input
                            name='amount'
                            type="number"
                            placeholder="How much do you want to save?"
                            onChange={e => this.onHandleChange(e)}
                            required
                        />
                        <textarea
                            name='notes'
                            placeholder="Savings description..."
                            onChange={e => this.onHandleChange(e)}
                        />
                        <button type="button" onClick={() => this.onHandleSave(this.state)}>Save</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default connect()(Budget);