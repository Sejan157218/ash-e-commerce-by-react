import React from 'react';
import './Product.css'

const Product = (props) => {
    const {key,name,img,price,seller,star,stock} = props.product
    return (
        <div className='product'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className='product-details'>
                <h4 className='product-name'>{name}</h4>
                <p>By {seller}</p>
                <p>{price}</p>
                <p><small>only {stock} left in stock - order soon</small></p>
                <button className='btn-regular'>add to cart</button>
            </div>
        </div>
    );
};

export default Product;