import axios from 'axios';

export const addProduct = (newProduct) => (dispatch) => {
  // Set isLoading to true
  dispatch({
    type: 'PRODUCT_SAVING',
  });

  axios
    .post('products', newProduct)
    .then((response) => {
      // Add prodcut to state when new product has been saved in the db
      if (response.status === 201) {
        dispatch({
          type: 'PRODUCT_ADDED',
          payload: newProduct,
        });
      }
    })
    .catch((err) => {
      dispatch({
        type: 'PRODUCT_SAVING_ERR',
        payload: err.response.data.message,
      });
    });
};

export const updateProduct = (updatedProduct, productId) => (dispatch) => {
  // Set isLoading to true
  dispatch({
    type: 'PRODUCT_SAVING',
  });

  axios
    .put(`products/${productId}`, updatedProduct)
    .then((response) => {
      // Add prodcut to state when new product has been saved in the db
      if (response.status === 204) {
        dispatch({
          type: 'PRODUCT_UPDATED',
        });
      }
    })
    .catch((err) => {
      dispatch({
        type: 'PRODUCT_SAVING_ERR',
        payload: err.response.data.message,
      });
    });
};

export const closeAlertDialog = () => (dispatch) => {
  dispatch({
    type: 'RESET_BOOLEAN_STATUS',
  });
};
