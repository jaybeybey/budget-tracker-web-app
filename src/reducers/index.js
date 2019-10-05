import { initialState } from './initialState';

export const budgetReducer = (state = initialState.expenses, action) => {
  switch (action.type) {
    case "ADD_NEW_EXPENSE":
      return [
        ...state,
        {
          id: action.id,
          name: action.name,
          amount: Number(action.amount),
          currency: action.currency,
          date: action.date,
          category: action.category,
          notes: action.notes
        }
      ];
    case "UPDATE_EXPENSE":
      return state.map(item => (
        item.id === action.id ?
          {
            id: action.id,
            name: action.name,
            amount: Number(action.amount),
            currency: action.currency,
            date: action.date,
            category: action.category,
            notes: action.notes
          } : item
      ));
    case "REMOVE_ITEM":
      return state.filter(item => item.id !== action.id);
    default:
      return state;
  }
};

export const usersReducer = (state = initialState.user, action) => {
  switch (action.type) {
    case 'UPDATE_USER':
      return (
        {
          ...state,
          firstName: action.firstName,
          lastName: action.lastName,
          income: action.income,
          defaultCurrency: action.defaultCurrency
        }
      );
    case 'SET_CURRENT_BUDGET_MONTH':
      return ({ ...state, currentMonth: action.currentMonth });
    default:
      return state;
  }
}

export const newBudget = (state = initialState.budget, action) => {
  let budgetExist = state.find(el => el.category === action.category);
  switch (action.type) {
    case 'NEW_BUDGET':
      return (!budgetExist) ?
        [
          ...state,
          {
            id: action.id,
            category: action.category,
            color: action.color,
            amount: action.amount,
            notes: action.notes
          }
        ]
        : state;
    case 'UPDATE_BUDGET':
      return state.map(item => (
        item.id === action.id ?
          {
            id: action.id,
            category: action.category,
            color: action.color,
            amount: action.amount,
            notes: action.notes
          } : item
      ))
    case "DELETE_BUDGET":
      return state.filter(item => item.id !== action.id);
    default:
      return state;
  }
}

export const newSavings = (state = initialState.savings, action) => {
  switch (action.type) {
    case 'NEW_SAVINGS':
      let savingsExist = state.find(el => el.name === action.name);
      if (!savingsExist) {
        return [
          ...state,
          {
            id: action.id,
            name: action.name,
            color: action.color,
            amount: action.amount,
            notes: action.notes
          }
        ]
      }
      break
    default:
      return state;
  }
}
