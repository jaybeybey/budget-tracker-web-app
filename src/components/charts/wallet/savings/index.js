import React, { Component } from 'react'
import { connect } from 'react-redux'

import './styles.css'

import { newSavings } from '../../../../store/actions'
import { FormInput, FormGroup, FormTextArea, FormButton } from '../../../forms';

class SavingsModal extends Component {
    state = {
        name: '',
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
                    <FormGroup legend="<SAVINGS />">
                        <FormInput label="Name" name="name" type="text" onChange={this.onHandleChange} />
                        <FormInput label="Color" name="color" type="color" onChange={this.onHandleChange} />
                        <FormInput label="Amount" name="amount" type="number" onChange={this.onHandleChange} />
                        <FormTextArea label="Notes" name="notes" placeholder="Savings description..." onChange={this.onHandleChange} />
                        <FormButton type="submit" onClick={() => this.onHandleSave(this.state)}>Save</FormButton>
                    </FormGroup>
                </div>
            </div>
        )
    }
}

export default connect()(SavingsModal);
