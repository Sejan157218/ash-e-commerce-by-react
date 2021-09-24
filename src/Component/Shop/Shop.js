import React, { useEffect, useState } from 'react';
import  {AddLocalStorage, getStorageData } from '../AddLocalStorage/AddLocalStorage';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products,setProducts] = useState([]);
    const [cart,setCart] = useState([])

    useEffect(()=>{
        fetch('./products.JSON')
            .then(res=>res.json())
            .then(data=>setProducts(data))
    },[]);
    useEffect(()=>{
        if(products.length){
            const productKey = getStorageData();
            let storeCart = []
            for(let key in productKey){
                const addedProduct = products.find(product=>product.key===key);
                storeCart.push(addedProduct);
            }
            setCart(storeCart)
        }
    },[products])
    const handlerAddToCart = product=>{
        const newCart = [...cart,product]
        setCart(newCart);
        AddLocalStorage(product.key)
    }
    return (
        <div className='shop-container'>
            <div className='product-container'>
                {
                    products.map(product=><Product 
                        handlerAddToCart={handlerAddToCart}
                        key={product.key} 
                        product={product}
                        ></Product>)
                }
            </div>
            <div className='order-container'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;