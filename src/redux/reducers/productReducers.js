// src/redux/reducers/productReducer.js
const initialState = {
    products: [],
    productDetails: {},
  };
  
  const productReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_PRODUCTS_SUCCESS':
        return {
          ...state,
          products: action.payload,
        };
      case 'FETCH_PRODUCT_DETAILS_SUCCESS':
        return {
          ...state,
          productDetails: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default productReducer;
  