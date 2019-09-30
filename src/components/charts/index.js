import React from 'react'
import { connect } from 'react-redux'

import './styles.css'

import BalanceChart from './balanceChart'
import SpendingChart from './spendingChart'
import SavingsChart from './savingsChart'
import BreakDownChart from './breakDownChart'
import MixedChart from './breakDownChart/mixedChart'

import Wallet from './wallet'


const Report = (props) => {
    const { income, totalSpending } = props
    const reducedTotalSpending = totalSpending.reduce((a, c) => a + c, 0);
    const totalSaving = income - reducedTotalSpending;
    return (
        <>
            <Wallet />
            <div className='report-container container overflow-hidden'>
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
        totalSpending: state.budgetReducer.map(num => parseInt(num.amount)),
        savings: state.newSavings
    }
}

export default connect(mapStateToProps)(Report)


