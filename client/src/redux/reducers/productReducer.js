import {
  PRODUCT_SAVING,
  PRODUCT_ADDED,
  PRODUCT_SAVING_ERR,
  RESET_BOOLEAN_STATUS,
} from '../actions/types';

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
    case PRODUCT_SAVING_ERR:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case RESET_BOOLEAN_STATUS:
      return {
        ...state,
        isLoading: false,
        isSuccess: false,
        isError: false,
      };

    default:
      return state;
  }
}
