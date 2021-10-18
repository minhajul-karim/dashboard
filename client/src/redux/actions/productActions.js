import axios from 'axios';

// TODO: CAN WE CREATE SERVICES FOR NETWORK REQUESTS?
export const addProduct = (newProduct) => (dispatch) => {
  /**
   * TODO:
   * At every invocation make isLoading: true
   * If response.status === 201: dispatch ADD_Product, make isLoading: false
   * If error occurs: make isLoading: false, isError: true
   */
  // Set isLoading to true
  dispatch({
    type: 'PRODUCT_SAVING',
  });

  axios
    .post('http://localhost:5000/api/products', newProduct)
    .then((response) => {
      // Add prodcut to state when new product has been saved in the db
      if (response.status === 201) {
        dispatch({
          type: 'PRODUCT_ADDED',
          payload: newProduct,
        });
      }
    })
    .catch((error) => console.error(error));
};
