import { useReducer } from 'react';
import { APP_ACTIONS } from './reducerAction-lib';

const appDefaultState = {
  product: {},
  products: null,
};

function appReducer(state, action) {
  switch (action.type) {
    case APP_ACTIONS.SET_PRODUCT:
      return { ...state, product: action.data };
    case APP_ACTIONS.SET_PRODUCT_LIST:
      return { ...state, products: action.data };
    default:
      throw new Error();
  }
}

export function useAppReducer() {
  return useReducer(appReducer, appDefaultState);
}

export default { useAppReducer };
