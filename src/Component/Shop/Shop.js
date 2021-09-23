import React, { useEffect, useState } from 'react';
import './Shop.css'

const Shop = () => {
    const [products,setProducts] = useState([]);

    useEffect(()=>{
        fetch('./products.JSON')
            .then(res=>res.json())
            .then(data=>setProducts(data))
    },[])
    return (
        <div className='shop-container'>
            <div className='product-container'>
                <h1>Products : {products.length}</h1>
            </div>
            <div className='order-container'>
                <h1>Order Summary</h1>
                <h4>Items Ordered : </h4>
            </div>
        </div>
    );
};

export default Shop;