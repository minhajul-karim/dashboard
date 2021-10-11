/* eslint-disable import/prefer-default-export */
export const addProduct = (newProduct) => (dispatch) => {
  console.log('save the following prod');
  console.log(newProduct);
  dispatch({
    type: 'ADD_PRODUCT',
    payload: newProduct,
  });
};
