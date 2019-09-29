import uuid from 'uuid';

export const addNewExpense = data => ({
  type: "ADD_NEW_EXPENSE",
  id: data.id,
  name: data.name,
  amount: data.amount,
  currency: data.currency,
  date: data.date,
  category: data.category,
  notes: data.notes
});

export const updateExpense = data => ({
  type: "UPDATE_EXPENSE",
  id: data.id,
  name: data.name,
  amount: data.amount,
  currency: data.currency,
  date: data.date,
  category: data.category,
  notes: data.notes
});

export const removeItem = id => ({
  type: "REMOVE_ITEM",
  id
});

export const updateUser = data => ({
  type: 'UPDATE_USER',
  firstName: data.firstName,
  lastName: data.lastName,
  income: data.income,
  defaultCurrency: data.defaultCurrency
})

export const newBudget = data => ({
  type: 'NEW_BUDGET',
  id: data.id,
  category: data.category,
  color: data.color,
  amount: data.amount,
  notes: data.notes
})

export const newSavings = data => ({
  type: 'NEW_SAVINGS',
  id: uuid(),
  savingsName: data.savingsName,
  color: data.color,
  amount: data.amount,
  notes: data.notes
})

export const updateBudget = (data,id) => ({
  type: 'UPDATE_BUDGET',
  id: id,
  category: data.category,
  color: data.color,
  amount: data.amount,
  notes: data.notes
})