import React from 'react'
import { connect } from 'react-redux'

import './styles.css'

import BalanceChart from './balanceChart'
import SpendingChart from './spendingChart'
import SavingsChart from './savingsChart'
import BreakDownChart from './breakDownChart'
import MixedChart from './breakDownChart/mixedChart'
import  { setCurrentBudgetMonth } from '../../store/actions';
import Wallet from './wallet'
import { getCurrentMonthExpenses } from '../../store/selectors';

const MontlyDate = ({ currentMonth, onCurrentMonthChange }) => (
    <div className="montly-date-container">
        <label>Current Month</label>
        <input
            type="month"
            name="date"
            value={currentMonth}
            onChange={e => onCurrentMonthChange(e.target.value)}
        />
    </div>
);

const mapStateMontlyDate = state => ({ currentMonth: state.user.currentMonth});
const mapDispatchMontlyDate = { onCurrentMonthChange: setCurrentBudgetMonth }
const ConnectedMontlyDate = connect(mapStateMontlyDate, mapDispatchMontlyDate)(MontlyDate);

const Report = (props) => {
    const { income, expenses } = props;
    const totalSpending = expenses.map(num => parseInt(num.amount));
    const reducedTotalSpending = totalSpending.reduce((a, c) => a + c, 0);
    const totalSaving = income - reducedTotalSpending;
    return (
        <>
            <Wallet />
            <div className='report-container container overflow-hidden'>
                <ConnectedMontlyDate />
                <div className='gauge-charts row'>
                    <div className="col-md-12 col-lg-3">
                        <SpendingChart totalSpending={reducedTotalSpending} income={income} />
                    </div>
                    <div className="col-md-12 col-lg-3">
                        <SavingsChart />
                    </div>
                    <div className="col-md-12 col-lg-3">
                        <BalanceChart totalSaving={totalSaving} income={income} />
                    </div>
                </div>
                <BreakDownChart />
                <MixedChart />
            </div>
        </>
    )
}

const mapStateToProps = state => {
    return {
        income: state.user.income,
        expenses: getCurrentMonthExpenses(state),
        savings: state.newSavings
    }
}

export default connect(mapStateToProps)(Report)


