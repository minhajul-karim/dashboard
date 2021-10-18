import { PRODUCT_SAVING, PRODUCT_ADDED } from '../actions/types';

const initialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  items: [],
};

export default function productReducer(state = initialState, action) {
  switch (action.type) {
    case PRODUCT_SAVING:
      return {
        ...state,
        isLoading: true,
      };
    case PRODUCT_ADDED:
      return {
        ...state,
        isLoading: false,
        isSuccess: true,
        items: [...state.items, action.payload],
      };

    default:
      return state;
  }
}
