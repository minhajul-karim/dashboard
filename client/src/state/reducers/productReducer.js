import { FETCH_PRODUCTS, ADD_PRODUCT } from '../actions/types';

const initialState = [];

export default function productReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_PRODUCT:
      return [...state, action.payload];

    default:
      return state;
  }
}
