import {
  PRODUCT_LIST_GET_REQUEST,
  PRODUCT_LIST_GET_SUCCESS,
  PRODUCT_LIST_GET_ERROR,
  PRODUCT_ADD_REQUEST,
  PRODUCT_ADD_SUCCESS,
  PRODUCT_ADD_ERROR,
  PRODUCT_UPDATE_REQUEST,
  PRODUCT_UPDATE_SUCCESS,
  PRODUCT_UPDATE_ERROR,
  PRODUCT_DELETE_REQUEST,
  PRODUCT_DELETE_SUCCESS,
  PRODUCT_DELETE_ERROR,
  RESET,
} from '../actions/types';

const initialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  errorMsg: '',
  successMsg: '',
  shouldRedirect: false,
};

export default function productReducer(state = initialState, action) {
  switch (action.type) {
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
        errorMsg: action.payload,
      };
    case PRODUCT_ADD_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case PRODUCT_ADD_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isSuccess: true,
        successMsg: action.payload,
        isError: false,
      };
    case PRODUCT_ADD_ERROR:
      return {
        ...state,
        isLoading: false,
        isSuccess: false,
        isError: true,
        errorMsg: action.payload,
      };
    case PRODUCT_UPDATE_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case PRODUCT_UPDATE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isSuccess: true,
        successMsg: action.payload,
        isError: false,
      };
    case PRODUCT_UPDATE_ERROR:
      return {
        ...state,
        isLoading: false,
        isSuccess: false,
        isError: true,
        errorMsg: action.payload,
      };
    case RESET:
      return initialState;
    default:
      return state;
  }
}
