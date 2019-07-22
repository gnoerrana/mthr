import React from 'react';

const Product = props => (



<div className="col-md-6 col-sm-6 col-xs-6 productId{props.productId}">
            <div className="product-grid">
                <div className="product-image">
                    <a href="#">
                        <img className="pic-1" src={props.thumb1}/>
                        <img className="pic-2" src={props.thumb2}/>
                    </a>
                </div>
                <div className="product-content">
                	<a className="h4 brand-info" href="">{props.brandName}</a>
                	<a className="h4 product-name" href="">{props.name}</a>
                    <div className="price">{props.newPrice}
                        <span>{props.oriPrice}</span>
                    </div>
                    
                </div>
            </div>
        </div>


);

export default Product;