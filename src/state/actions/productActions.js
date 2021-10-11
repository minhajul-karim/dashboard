import axios from 'axios';

export const addProduct = (newProduct) => (dispatch) => {
  // TODO: CHANGE THE SERVER URL WITH A VALID ONE
  axios
    .post('http://serverurl.com/products', newProduct)
    .then((response) => {
      // TODO: DISPATCH AFTER PRODUCT HAS BEEN SAVED
      dispatch({
        type: 'ADD_PRODUCT',
        payload: newProduct,
      });
      console.log(`Dispatching ${newProduct}`);
    })
    .catch((error) => console.log(error));
};
