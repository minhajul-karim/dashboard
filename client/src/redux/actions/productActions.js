import axios from 'axios';

// Get list of all products
export const getProducts = (cb) => (dispatch) => {
  dispatch({
    type: 'PRODUCT_LIST_GET_REQUEST',
  });

  axios
    .get('products')
    .then((response) => {
      if (response.status === 200) {
        dispatch({
          type: 'PRODUCT_LIST_GET_SUCCESS',
        });
      }
      cb(response.data);
    })
    .catch(() => {
      dispatch({
        type: 'PRODUCT_LIST_GET_ERROR',
        payload: 'Product loading failed! Please try reloading this page',
      });
    });
};

// Add a new product
export const addProduct = (newProduct) => (dispatch) => {
  // Display spinner
  dispatch({
    type: 'PRODUCT_ADD_REQUEST',
  });

  axios
    .post('products', newProduct)
    .then((response) => {
      // Add prodcut to state when new product has been saved in the db
      if (response.status === 201) {
        dispatch({
          type: 'PRODUCT_ADD_SUCCESS',
          payload: 'Product saved',
        });
      }
    })
    .catch((err) => {
      dispatch({
        type: 'PRODUCT_ADD_ERROR',
        payload: err.response.data.message,
      });
    });
};

export const updateProduct = (updatedProduct, productId) => (dispatch) => {
  // Display spinner
  dispatch({
    type: 'PRODUCT_UPDATE_REQUEST',
  });

  axios
    .put(`products/${productId}`, updatedProduct)
    .then((response) => {
      if (response.status === 204) {
        dispatch({
          type: 'PRODUCT_UPDATE_SUCCESS',
          payload: 'Product updated',
        });
      }
    })
    .catch((err) => {
      dispatch({
        type: 'PRODUCT_UPDATE_ERROR',
        payload: err.response.data.message,
      });
    });
};

export const deleteProduct = (productId) => (dispatch) => {
  // Set isLoading to true
  dispatch({
    type: 'PRODUCT_SAVING',
  });

  axios
    .delete(`products/${productId}`)
    .then((response) => {
      if (response.status === 204) {
        dispatch({
          type: 'PRODUCT_DELETED',
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

export const reset = () => (dispatch) => {
  dispatch({
    type: 'RESET',
  });
};
