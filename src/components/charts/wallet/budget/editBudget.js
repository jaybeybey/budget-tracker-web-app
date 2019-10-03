import React, { Component } from 'react'
import { connect } from 'react-redux'

import './styles.css'

import { updateBudget } from '../../../../store/actions'
import dropdown_options from '../../../../containers/dropdown_option/category'
import 'react-notifications-component/dist/theme.css'
import { store } from 'react-notifications-component';
import { FormInput, FormGroup, FormSelect, FormTextArea, FormButton } from '../../../forms';

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
    onHandleSave = (data, id) => {
        this.props.dispatch(updateBudget(data, id));
        this.props.onEditBudgetHandle();
        // Show alert when the budget category exceeds 100%.

        let total = 0;
        this.props.items.filter(item => item.category === this.state.category).forEach(item => total += item.amount);
        total = total * 100 / this.state.amount;
        if (total >= 100) {
            this.budgetNotification(`The budget ${this.state.category} exceed 100% of its capacity.`);
        }
    };

    budgetNotification = (alert) => {
        store.addNotification({
            title: "Notification",
            message: alert,
            type: "warning",
            insert: "top",
            container: "top-right",
            animationIn: ["animated", "fadeIn"],
            animationOut: ["animated", "fadeOut"],
            dismiss: {
                duration: 5000,
                onScreen: true
            },
        });
    }

    render() {
        // const budgetToEdit = this.props.currentBudget.find(el => el.id === this.props.currentBudgetID);
        // const { category, color, amount, notes } = budgetToEdit;
        return (
            <div className='ext-budget-modal'>
                <div className='int-budget-edit-modal'>
                    <button className='x' onClick={this.props.onEditBudgetHandle}>x</button>
                    <FormGroup legend="<EDIT BUDGET />">
                        <FormInput label="Color" name="color" type="color" onChange={this.onHandleChange} />
                        <FormSelect label="Budget Type" name="category" onChange={this.onHandleChange}>
                            {dropdown_options}
                        </FormSelect>
                        <FormInput label="Amount" name="amount" type="number" onChange={this.onHandleChange} />
                        <FormTextArea label="Notes" name="notes" placeholder="Savings description..." onChange={this.onHandleChange} />
                        <FormButton type="submit" onClick={() => this.onHandleSave(this.state)}>Save</FormButton>
                    </FormGroup>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({ items: state.budgetReducer });

export default connect(mapStateToProps)(EditBudgetMode);
