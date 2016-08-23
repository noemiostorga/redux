import { createStore, combineReducers } from 'redux';

// import reducers here
import reducers from 'reducers/reducers';
// combine reducers
const reducers = combineReducers({
  // put reducers here
  reducers
})

// crerate the store
export default createStore(reducers);