import React, { Component } from 'react'
import { connect } from 'react-redux'
import uuid from 'uuid';

import './styles.css'

import { newBudget } from '../../../../store/actions'
import category from '../../../../containers/dropdown_option/category'
import { FormInput, FormGroup, FormSelect, FormTextArea, FormButton } from '../../../forms';


class NewBudgetModal extends Component {
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
                    <FormGroup legend="<BUDGET />">
                        <FormInput label="Color" name="color" type="color" onChange={this.onHandleChange} />
                        <FormSelect label="Budget Type" name="category" onChange={this.onHandleChange}>
                            {category}
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

export default connect()(NewBudgetModal);
