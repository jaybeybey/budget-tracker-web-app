import uuid from 'uuid';

const initialState = {
  expenses: [{
    id: uuid(),
    name: "coop",
    amount: 150,
    currency: "CHF",
    date: "2019-09-15",
    category: "Grocery",
    notes: "some"
  }, {
    id: uuid(),
    name: "school",
    amount: 120,
    currency: "CHF",
    date: "2019-09-12",
    category: "Fees",
    notes: "notes"
  }, {
    id: uuid(),
    name: "Bowling",
    amount: 350,
    currency: "CHF",
    date: "2019-09-12",
    category: "Fees",
    notes: "notes"
  }, {
    id: uuid(),
    name: "Water",
    amount: 550,
    currency: "CHF",
    date: "2019-09-12",
    category: "Fees",
    notes: "notes"
  }, {
    id: uuid(),
    name: "House",
    amount: 120,
    currency: "CHF",
    date: "2019-09-12",
    category: "Fees",
    notes: "notes"
  }, {
    id: uuid(),
    name: "Ice Cream",
    amount: 120,
    currency: "CHF",
    date: "2019-09-12",
    category: "Fees",
    notes: "notes"
  }, {
    id: uuid(),
    name: "Car",
    amount: 120,
    currency: "CHF",
    date: "2019-09-12",
    category: "Fees",
    notes: "notes"
  }, {
    id: uuid(),
    name: "Electricity",
    amount: 120,
    currency: "CHF",
    date: "2019-09-12",
    category: "Fees",
    notes: "notes"
  }, {
    id: uuid(),
    name: "College",
    amount: 120,
    currency: "CHF",
    date: "2019-09-12",
    category: "Fees",
    notes: "notes"
  }, {
    id: uuid(),
    name: "Internet",
    amount: 120,
    currency: "CHF",
    date: "2019-09-12",
    category: "Fees",
    notes: "notes"
  }, {
    id: uuid(),
    name: "Phone",
    amount: 120,
    currency: "CHF",
    date: "2019-09-12",
    category: "Fees",
    notes: "notes"
  }, {
    id: uuid(),
    name: "Elevator",
    amount: 120,
    currency: "CHF",
    date: "2019-09-12",
    category: "Fees",
    notes: "notes"
  }, {
    id: uuid(),
    name: "My Rent",
    amount: 800,
    currency: "CHF",
    date: "2019-09-09",
    category: "Rent",
    notes: "are"
  }, {
    id: uuid(),
    name: "Some taxes",
    amount: 500,
    currency: "CHF",
    date: "2019-09-20",
    category: "Taxes",
    notes: "here"
  }, {
    id: uuid(),
    name: "Movie and dinner",
    amount: 200,
    currency: "CHF",
    date: "2019-09-22",
    category: "Entertainment",
    notes: "okay"
  }],
  user: {
    firstName: 'FirstName',
    lastName: 'LastName',
    income: 4000,
    defaultCurrency: 'CHF'
  },
  budget: [
    {
      id: uuid(),
      category: 'Grocery',
      color: '#FDF3F4',
      amount: 300,
      notes: 'My budget for one month'
    }, {
      id: uuid(),
      category: 'Taxes',
      color: '#00E396',
      amount: 600,
      notes: 'My budget for one Tax'
    }
  ],
  savings: []
};

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
          firstName: action.firstName,
          lastName: action.lastName,
          income: action.income,
          defaultCurrency: action.defaultCurrency
        }
      )
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
