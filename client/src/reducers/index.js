import { combineReducers } from 'redux';
import user from './user';
import flash from './flash';
import orders from './orders';

const rootReducer = combineReducers({
  user,
  orders,
  flash
});

export default rootReducer;
