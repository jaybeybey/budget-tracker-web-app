import React, { useState, useEffect } from "react";
import { connect } from 'react-redux'

// import { store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import 'animate.css';

import './styles.css'
import Savings from './savings'
import Budget from './budget'
import EditBudgetMode from './budget/editBudget'
import ProgressBar from '../../../shared/components/progressBar'


const Wallet = (props) => {
    //hooks for showing the savings modal form
    const [showSavingsModal, setShowSavingsModal] = useState(false);
    const onSavingsModal = () => {
        setShowSavingsModal(!showSavingsModal);
    };
    //hooks for showing the budget modal form
    const [showBudgetModal, setShowBudgetModal] = useState(false);
    const onBudgetModal = () => {
        setShowBudgetModal(!showBudgetModal);
    };

    //on handling budget modal edit and getting the id of our current budget
    const [currentBudgetID, setCurrentBudgetId] = useState(null)
    const [editBudget, setEditBudget] = useState(false);
    const onEditBudgetHandle = (id) => {
        setEditBudget(!editBudget)
        setCurrentBudgetId(id)
    }

    const getBudgetProgress = budget => {
        let total = 0;
        props.items.filter(item => item.category === budget.category).forEach(item => total += item.amount);
        return Math.min(Math.round(total *  100 / budget.amount), 100);
    }

    //render the budget button
    const renderBudget = () => {
        return props.newBudget.map(item => {
            return (
                <div className="tooltip" key={item.id} >
                    <div className='new-bud-btn' onDoubleClick={() => onEditBudgetHandle(item.id)}>
                        <button style={{ backgroundColor: `${item.color}` }}>{item.category}</button>
                        <div className="tooltiptext">
                        <h5>Budget Type <span className='val-color'>{item.category}</span></h5>
                        <h5>Budget Amount <span className='val-color'>{item.amount}</span></h5>
                        <ProgressBar value={getBudgetProgress(item)} />
                        <h6>notes:</h6>
                        <h5>{item.notes}</h5>
                        </div>
                    </div>
                </div>
            )
        })
    }

    //render the save button
    const renderSavings = () => {
        return props.newSavings ? props.newSavings.map(item => {
            return (
                <div className='new-bud-btn' key={item.id}>
                    <button style={{ backgroundColor: `${item.color}` }}>{item.savingsName}</button>
                </div>
            )
        }) : null
    }

    useEffect(() => {
        console.log(props.newBudget)
    })

    return (
        <>
            <div className='top-btns'>
                <div className="dropdown">
                    <div>
                        <button className="dropbtn">Wallet</button>
                    </div>
                    <div className="dropdown-content">
                        <button onClick={() => onBudgetModal()}>Budget</button>
                        <button onClick={() => onSavingsModal()}>Savings</button>
                    </div>
                </div>
                {renderBudget()}
                {renderSavings()}
                {/* {renderBudgetEditMode()} */}
                {showSavingsModal ? <Savings onSavingsModal={onSavingsModal} /> : null}
                {showBudgetModal ? <Budget onBudgetModal={onBudgetModal} /> : null}
                {editBudget ?
                    <EditBudgetMode currentBudget={props.newBudget} currentBudgetID={currentBudgetID}
                        onEditBudgetHandle={onEditBudgetHandle} />
                    : null}
            </div>
            {/* {budgetAlert(props.items)} */}
        </>

    )
}

const mapStateToProps = state => {
    return {
        newBudget: state.newBudget,
        newSavings: state.newSavings,
        items: state.budgetReducer
    }
}

export default connect(mapStateToProps)(Wallet)



    // const [value, setValue] = useState(0);
    // useEffect(() => {
    //     budgetAlert(props.items)
    // });

    // const budgetAlert = (items) => {
    //     let budgetAmount;
    //     let budgetMinAmount;
    //     let budgetCategory;

    //     // let budgetDict = [];
    //     // props.newBudget.map(item => {
    //     //     return budgetDict = {
    //     //         name: item.category,
    //     //         amount: parseInt(item.amount)
    //     //     }
    //         // budgetCategory = item.category
    //         // budgetDict['name'] = item.category
    //         // budgetDict['amount'] = parseInt(item.amount)
    //     // })

    //     items.forEach(item => {
    //         if (item.category === budgetCategory)
    //             budgetMinAmount = item.amount
    //     })

/* ------------------------------------- useEffect testing -------------------------------------*/
        // let testValue = ((100 * budgetMinAmount) / budgetAmount).toFixed(1)
        // console.log(budgetAmount,'max')
        // console.log(budgetMinAmount,'min')
        // console.log(testValue,'my value')
        // setValue(testValue)
/* ----------------------------------------------------------------------------------------------*/

    //     return items.forEach(item => {
    //         if (item.category === budgetCategory && item.amount >= budgetAmount) {
    //             budgetNotification()
    //         }
    //     });
    // }



        // const budgetNotification = () => {
    //     store.addNotification({
    //         title: "Notification",
    //         message: "Budget limit reached",
    //         type: "danger",
    //         insert: "top",
    //         container: "top-right",
    //         animationIn: ["animated", "fadeIn"],
    //         animationOut: ["animated", "fadeOut"],
    //         dismiss: {
    //             duration: 5000,
    //             onScreen: true
    //         }
    //     });
    // }