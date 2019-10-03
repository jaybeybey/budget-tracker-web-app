import React from 'react'
import { connect } from "react-redux";
import { getCurrentMonthExpenses } from '../../../../store/selectors';

const spendingsTable = (props) => {
    const categories = ["Entertainment", "Grocery", "Fees", "Rent", "Taxes"];
    const renderTable = () => {
        if (props.items.length > 0) {
            let totals = {};
            categories.forEach(category => {
                return (totals[category] = 0);
            });
            props.items.forEach(item => {
                let total = 0;
                let value = parseInt(item.amount);
                totals[item.category] += value;
                return (total += value);
            });
            return categories.map((category, index) => {
                return (
                    <div className="tr" key={index}>
                        <div className="td">{category}</div>
                        <div className="td">{totals[category]}</div>
                    </div>
                );
            });
        }
    };

    const totalAmount = () => {
        return props.items
            ? props.items
                .map(item => parseInt(item.amount))
                .reduce((a, c) => a + c, 0)
            : null;
    };
        
    return (
        <div className='spending-table'>
            <div className="report-card">
                <div className="table">
                    <div className="th">
                        <div className="td">Categories</div>
                        <div className="td">Amount</div>
                    </div>
                    {renderTable()}
                    <div className="total-td">Spendings</div>
                    <div className="total-td">{totalAmount()}</div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        items: getCurrentMonthExpenses(state),
        budget: state.newBudget
    };
};

export default connect(mapStateToProps)(spendingsTable);
