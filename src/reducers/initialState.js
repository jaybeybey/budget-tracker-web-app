import uuid from 'uuid';
const currentDate = new Date();

export const initialState = {
    expenses: [{
      id: uuid(),
      name: "coop",
      amount: 10,
      currency: "CHF",
      date: "2019-09-15",
      category: "Grocery",
      notes: "some"
    }, {
      id: uuid(),
      name: "school",
      amount: 120,
      currency: "CHF",
      date: "2019-09-13",
      category: "Fees",
      notes: "notes"
    }, {
      id: uuid(),
      name: "Bowling",
      amount: 50,
      currency: "CHF",
      date: "2019-09-14",
      category: "Entertainment",
      notes: "notes"
    }, {
      id: uuid(),
      name: "Water",
      amount: 120,
      currency: "CHF",
      date: "2019-09-15",
      category: "Fees",
      notes: "notes"
    }, {
      id: uuid(),
      name: "Beer",
      amount: 10,
      currency: "CHF",
      date: "2019-09-22",
      category: "Grocery",
      notes: "notes"
    }, {
      id: uuid(),
      name: "Car",
      amount: 120,
      currency: "CHF",
      date: "2019-09-23",
      category: "Fees",
      notes: "notes"
    }, {
      id: uuid(),
      name: "Electricity",
      amount: 120,
      currency: "CHF",
      date: "2019-09-25",
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
      name: "New TV",
      amount: 99,
      currency: "CHF",
      date: "2019-09-12",
      category: "Entertainment",
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
    }, {
        id: uuid(),
        name: "coop",
        amount: 150,
        currency: "CHF",
        date: "2019-10-5",
        category: "Grocery",
        notes: "some"
      }, {
        id: uuid(),
        name: "school",
        amount: 499,
        currency: "CHF",
        date: "2019-10-25",
        category: "Fees",
        notes: "notes"
      }, {
        id: uuid(),
        name: "My Rent",
        amount: 1200,
        currency: "CHF",
        date: "2019-10-25",
        category: "Rent",
        notes: "are"
      }, {
        id: uuid(),
        name: "Some taxes",
        amount: 800,
        currency: "CHF",
        date: "2019-10-20",
        category: "Taxes",
        notes: "here"
      }, {
        id: uuid(),
        name: "Movie and dinner",
        amount: 200,
        currency: "CHF",
        date: "2019-10-4",
        category: "Entertainment",
        notes: "okay"
      }],
    user: {
      firstName: 'FirstName',
      lastName: 'LastName',
      income: 4000,
      defaultCurrency: 'CHF',
      currentMonth: `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`,
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


















