import React from 'react'
import { connect } from 'react-redux'

import './styles.css'
import logo from './save-money.png'

import BalanceChart from './balanceChart'
import SpendingChart from './spendingChart'
// import SavingsChart from './savingsChart'
import BreakDownChart from './breakDownChart'
import MixedChart from './breakDownChart/mixedChart'
import { setCurrentBudgetMonth } from '../../store/actions';
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

const mapStateMontlyDate = state => ({ currentMonth: state.user.currentMonth });
const mapDispatchMontlyDate = { onCurrentMonthChange: setCurrentBudgetMonth }
const ConnectedMontlyDate = connect(mapStateMontlyDate, mapDispatchMontlyDate)(MontlyDate);

const Report = (props) => {
    const { income, expenses, currency } = props;
    const totalSpending = expenses.map(num => parseInt(num.amount));
    const reducedTotalSpending = totalSpending.reduce((a, c) => a + c, 0);
    const totalSaving = income - reducedTotalSpending;
    const dataHandler = expenses.length > 0;
    const renderCharts = () => {
        return dataHandler ?
            <>
                <div className='gauge-charts row'>
                    <div className="col-md-12 col-lg-3">
                        <SpendingChart totalSpending={reducedTotalSpending} income={income} />
                    </div>
                    <div className="col-md-12 col-lg-3 savings">
                        <img src={logo} alt='Logo' />
                        <h2>Savings</h2>
                        <h5>{totalSaving} <span>{currency}</span></h5>
                    </div>
                    <div className="col-md-12 col-lg-3">
                        <BalanceChart totalSaving={totalSaving} income={income} />
                    </div>
                </div>
                <BreakDownChart />
                <MixedChart />
            </>
            : <div className='hide-charts'><h1> no data available </h1></div>
    }

    return (
        <>
            <Wallet />
            <div className='report-container container overflow-hidden'>
                <ConnectedMontlyDate />
                {/* <div className='gauge-charts row'>
                    <div className="col-md-12 col-lg-3">
                        <SpendingChart totalSpending={reducedTotalSpending} income={income} />
                    </div>
                    <div className="col-md-12 col-lg-3">
                    </div>
                    <div className="col-md-12 col-lg-3">
                        <BalanceChart totalSaving={totalSaving} income={income} />
                    </div>
                </div>
                <BreakDownChart />
                <MixedChart /> */}
                {renderCharts()}
            </div>
        </>
    )
}

const mapStateToProps = state => {
    return {
        income: state.user.income,
        expenses: getCurrentMonthExpenses(state),
        savings: state.newSavings,
        currency: state.user.defaultCurrency
    }
}

export default connect(mapStateToProps)(Report)


