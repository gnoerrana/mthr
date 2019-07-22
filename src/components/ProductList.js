import React from 'react';
import Product from './Product';
import NoResult from './NoResult';

const ProductList = props => { 
  
  const results = props.data;
  let products;
  if (results.length) {
    products = results.map(product => <Product productId={product.product_id} name={product.product_title} brandName={product.brand.name} oriPrice={product.pricing.formatted.base_price} newPrice={product.pricing.formatted.effective_price} thumb1={product.images[0].thumbnail400} thumb2={product.images[2].thumbnail400}/>); 
  } else {
    products = <NoResult />
  }

  return(
    <ul className="product-list">
      {products}
    </ul> 
  );
}

export default ProductList;