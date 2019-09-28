import React, { Component } from 'react'
import { connect } from 'react-redux'
import uuid from 'uuid';


import './styles.css'

import { newBudget } from '../../../../store/actions'
import category from '../../../../containers/dropdown_option/category'

class budget extends Component {
    state = {
        id: uuid(),
        category: '',
        color: '',
        amount: '',
    }
    onHandleChange = e => {
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value
        });
    };
    onHandleSave = data => {
        this.props.dispatch(newBudget(data));
        this.props.onBudgetModal();
    };
    
    render() {
        return (
            <div className='ext-budget-modal'>
                <div className='int-budget-modal'>
                    <button className='x' onClick={this.props.onBudgetModal}>x</button>
                    <form>
                        <span className="formtext">&#x3C;BUDGET/&#x3E;</span>
                        <div className='name-color'>
                            <label name='color'>Color</label>
                            <input
                                type="color"
                                name='color'
                                onChange={e => this.onHandleChange(e)}
                            />
                        </div>
                        <div className='category'>
                            <label name='category'>Budget Type</label>
                            <select
                                name='category'
                                onChange={e => this.onHandleChange(e)}
                                required
                            >
                                {category}
                            </select>
                        </div>
                        <label name='amount'>Amount</label>
                        <input
                            name='amount'
                            type="number"
                            placeholder="Budget Amount"
                            onChange={e => this.onHandleChange(e)}
                            required
                        />
                        <textarea
                            name='notes'
                            placeholder="Budget description..."
                            onChange={e => this.onHandleChange(e)}
                        />
                        <button type="button" onClick={() => this.onHandleSave(this.state)}>Save</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default connect()(budget);