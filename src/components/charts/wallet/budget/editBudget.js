import React, { Component } from 'react'
import { connect } from 'react-redux'

import './styles.css'

import { updateBudget } from '../../../../store/actions'
import dropdown_options from '../../../../containers/dropdown_option/category'

class EditBudgetMode extends Component {
    state = {
        id: this.props.currentBudgetID,
        category: '',
        color: '',
        amount: '',
        notes: ''
    }
    // componentDidMount=()=>{
    //     const budgetToEdit = this.props.currentBudget.find(el => el.id === this.props.currentBudgetID);
    //     const { category, color, amount, notes } = budgetToEdit;
    //     this.setState({
    //         category: category,
    //         color: color,
    //         amount: amount,
    //         notes: notes
    //     })
    // }
    
    onHandleChange = e => {
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value 
        });
    };
    onHandleSave = (data,id) => {
        this.props.dispatch(updateBudget(data, id));
        this.props.onEditBudgetHandle();
        // Show alert when the budget category exceeds 100%.

        let total = 0;
        this.props.items.filter(item => item.category === this.state.category).forEach(item => total += item.amount);
        total = total *  100 / this.state.amount;
        if (total >= 100) {
            alert(`The budget ${this.state.category} exceed 100% of its capacity.`);
        }
    };

    render() {
        const budgetToEdit = this.props.currentBudget.find(el => el.id === this.props.currentBudgetID);
        const { category, color, amount, notes } = budgetToEdit;
        return (
            <div className='ext-budget-modal'>
                <div className='int-budget-edit-modal'>
                    <button className='x' onClick={this.props.onEditBudgetHandle}>x</button>
                    <form>
                        <span className="formtext-edit">&#x3C;EDIT BUDGET/&#x3E;</span>
                        <div className='name-color'>
                            <label name='color'>Color</label>
                            <input
                                type="color"
                                name='color'
                                // value={this.state.color}
                                onChange={e => this.onHandleChange(e)}
                            />
                        </div>
                        <div className='category'>
                            <label name='category'>Budget Type</label>
                            <select
                                name='category'
                                onChange={e => this.onHandleChange(e)}
                                // value={this.state.category}
                            >
                                {dropdown_options}
                            </select>
                        </div>
                        <label name='amount'>Amount</label>
                        <input
                            name='amount'
                            type="number"
                            // value={this.state.amount}
                            onChange={e => this.onHandleChange(e)}
                        />
                        <textarea
                            name='notes'
                            // value={this.state.notes}
                            placeholder="Budget description..."
                            onChange={e => this.onHandleChange(e)}
                        />
                        <button type="button" onClick={() => this.onHandleSave(this.state, this.props.currentBudgetID)}>
                            Save
                            </button>
                    </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({ items: state.budgetReducer });

export default connect(mapStateToProps)(EditBudgetMode);
