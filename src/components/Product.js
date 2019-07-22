import React from 'react';

const Product = props => (
<li>
	<img src={props.thumb1}/>
	<img src={props.thumb2}/>
	<span>{props.productId}</span>
	<span>{props.brandName}</span>
    <span>{props.name}</span>
    <span>{props.newPrice}</span>
    <span>{props.oriPrice}</span>
    

</li>
);

export default Product;