import moment from "moment";

/* 
 * Selectors are used to compute derived data efficiently.
 * See: https://redux.js.org/recipes/computing-derived-data.
 */

const getExpenses = state => state.budgetReducer;
const getUser = state => state.user;

export const getCurrentMonthExpenses = state => {
    const expenses = getExpenses(state);
    const user = getUser(state);
    const currentMonthDate = moment(user.currentMonth, 'YYYY-MM');

    return expenses.filter(expense => {
        const parsedDate = moment(expense.date, 'YYYY-MM-DD');
        const isCurrentMonth = parsedDate.month() === currentMonthDate.month();
        const isCurrentYear = parsedDate.year() === currentMonthDate.year();
        return isCurrentMonth && isCurrentYear;
    });
}
