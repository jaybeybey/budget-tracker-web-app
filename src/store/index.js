import { createStore, combineReducers } from 'redux';
import {budgetReducer,usersReducer,newBudget,newSavings} from '../reducers'

const rootReducer = combineReducers({
    budgetReducer:budgetReducer,
    user:usersReducer,
    newBudget:newBudget,
    newSavings:newSavings,
    // updatedBudget:updatedBudget
});


const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

export default store;
