import React, { Component } from 'react'
import { connect } from 'react-redux'

import './styles.css'

import { updateBudget, deleteBudget } from '../../../../store/actions'
import dropdown_options from '../../../../containers/dropdown_option/category'
// import 'react-notifications-component/dist/theme.css'
// import { store } from 'react-notifications-component';
import { FormInput, FormGroup, FormSelect, FormTextArea, EditButton } from '../../../forms';

class EditBudgetMode extends Component {
    state = {
        id: this.props.currentBudgetID,
        category: '',
        color: '',
        amount: '',
        notes: '',
        // isTouched: false,
    }

    componentDidMount() {
        const budgetToEdit = this.props.items.find(el => el.id === this.props.currentBudgetID);
        const { category, color, amount, notes } = budgetToEdit;
        this.setState({
            category: category,
            color: color,
            amount: amount,
            notes: notes
        })
    }

    onHandleChange = e => {
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value,
            isTouched: true,
        });
    };
    onHandleSave = (data) => {
        this.props.dispatch(updateBudget(data, data.id));
        this.props.onEditBudgetHandle();
        // Show alert when the budget category exceeds 100%.

        // if (!this.state.isTouched) {
        //     return;
        // }
        // let total = 0;
        // this.props.items.filter(item => item.category === this.state.category).forEach(item => total += item.amount);
        // total = total * 100 / this.state.amount;
        // if (total === 100) {
        //     this.budgetNotification(`The budget ${this.state.category} has reach 100% of its limit.`);
        // } else if (total > 100) {
        //     this.overBudgetNotification(`The budget ${this.state.category} is over its limit.`);
        // }
    };

    onHandleDelete = (id) => {
        this.props.dispatch(deleteBudget(id));
        this.props.onEditBudgetHandle();
    }

    // budgetNotification = (alert) => {
    //     store.addNotification({
    //         title: "Notification",
    //         message: alert,
    //         type: "warning",
    //         insert: "top",
    //         container: "top-right",
    //         animationIn: ["animated", "fadeIn"],
    //         animationOut: ["animated", "fadeOut"],
    //         dismiss: {
    //             duration: 5000,
    //             onScreen: true
    //         },
    //     });
    // }

    // overBudgetNotification = (alert) => {
    //     store.addNotification({
    //         title: "Notification",
    //         message: alert,
    //         type: "Danger",
    //         insert: "top",
    //         container: "top-right",
    //         animationIn: ["animated", "fadeIn"],
    //         animationOut: ["animated", "fadeOut"],
    //         dismiss: {
    //             duration: 5000,
    //             onScreen: true
    //         },
    //     });
    // }

    render() {
        const { category, color, amount, notes } = this.state;
        return (
            <div className='ext-budget-modal'>
                <div className='int-budget-edit-modal'>
                    <button className='x' onClick={this.props.onEditBudgetHandle}>x</button>
                    <FormGroup legend="<EDIT BUDGET />">
                        <FormInput label="Color" name="color" type="color" value={color} onChange={this.onHandleChange} />
                        <FormSelect label="Budget Type" name="category" value={category} onChange={this.onHandleChange}>
                            {dropdown_options}
                        </FormSelect>
                        <FormInput label="Amount" name="amount" type="number" value={amount} onChange={this.onHandleChange} />
                        <FormTextArea label="Notes" name="notes" placeholder="Savings description..." value={notes} onChange={this.onHandleChange} />
                        <div className='save-del-btn'>
                            <EditButton type="submit" onClick={() => this.onHandleSave(this.state)}>Save</EditButton>
                            <EditButton type="submit" onClick={() => this.onHandleDelete(this.props.currentBudgetID)}>Delete</EditButton>
                        </div>
                    </FormGroup>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({ items: state.newBudget });

export default connect(mapStateToProps)(EditBudgetMode);
