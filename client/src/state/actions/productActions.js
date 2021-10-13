import axios from 'axios';

export const addProduct = (newProduct) => (dispatch) => {
  axios
    .post('http://localhost:5000/products', newProduct)
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
