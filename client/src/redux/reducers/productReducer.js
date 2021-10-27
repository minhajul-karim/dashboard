import {
  PRODUCT_ADDED,
  PRODUCT_DELETED,
  PRODUCT_SAVING,
  PRODUCT_SAVING_ERR,
  PRODUCT_UPDATED,
  RESET_BOOLEAN_STATUS,
  PRODUCT_LIST_GET_REQUEST,
  PRODUCT_LIST_GET_SUCCESS,
  PRODUCT_LIST_GET_ERROR,
  PRODUCT_ADD_REQUEST,
  PRODUCT_ADD_SUCCESS,
  PRODUCT_ADD_ERROR,
  PRODUCT_EDIT_REQUEST,
  PRODUCT_EDIT_SUCCESS,
  PRODUCT_EDIT_ERROR,
  PRODUCT_DELETE_REQUEST,
  PRODUCT_DELETE_SUCCESS,
  PRODUCT_DELETE_ERROR,
  RESET,
} from '../actions/types';

const initialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  error: '',
  shouldRedirect: false,
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
    case PRODUCT_UPDATED:
      return {
        ...state,
        isLoading: false,
        isSuccess: true,
        shouldRedirect: true,
      };
    case PRODUCT_DELETED:
      return {
        ...state,
        isLoading: false,
        isSuccess: true,
      };
    case PRODUCT_SAVING_ERR:
      return {
        ...state,
        isLoading: false,
        isError: true,
        error: action.payload,
      };
    case RESET_BOOLEAN_STATUS:
      return {
        ...state,
        isLoading: false,
        isSuccess: false,
        isError: false,
        shouldRedirect: false,
        error: '',
      };
    // new
    case PRODUCT_LIST_GET_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case PRODUCT_LIST_GET_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isSuccess: true,
        isError: false,
      };
    case PRODUCT_LIST_GET_ERROR:
      return {
        ...state,
        isLoading: false,
        isSuccess: false,
        isError: true,
        error: action.payload,
      };
    case RESET:
      return initialState;
    default:
      return state;
  }
}
