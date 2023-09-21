import { createStore, combineReducers } from 'redux';
import userReducer from '../Redux/userReducer';
const rootReducer = combineReducers({
  user: userReducer,
});
const loadState = () => {
  try {
    const serializedState = localStorage.getItem('reduxState');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (error) {
    return undefined;
  }
};
const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('reduxState', serializedState);
  } catch (error) {
  }
};

const persistedState = loadState();
const store = createStore(
  rootReducer,
  persistedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // Optional for Redux DevTools
);

store.subscribe(() => {
  saveState({
    user: store.getState().user,
  });
});

export default store;
