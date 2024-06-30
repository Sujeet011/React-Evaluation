import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductDetails } from '../redux/actions/productActions';

function ProductDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector(state => state.productDetails);

  useEffect(() => {
    if (id) {
      // Ensure proper decoding of URI component
      const decodedId = decodeURIComponent(id);
      dispatch(fetchProductDetails(decodedId));
    }
  }, [dispatch, id]);

  return (
    <div>
      {product ? (
        <div>
          <h1>{product.name}</h1>
          <p>{product.description}</p>
          <p>${product.price}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default ProductDetails;
