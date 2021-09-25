import React, { useEffect, useState } from 'react';
import  {AddLocalStorage, getStorageData } from '../AddLocalStorage/AddLocalStorage';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products,setProducts] = useState([]);
    const [cart,setCart] = useState([])
    const [displaySearch,setDisplaySearch] = useState([])

    useEffect(()=>{
        fetch('./products.JSON')
            .then(res=>res.json())
            .then(data=>{
                setProducts(data);
                setDisplaySearch(data);
            })
            
    },[]);
    useEffect(()=>{
        if(products.length){
            const productKey = getStorageData();
            let storeCart = []
            for(let key in productKey){
                const addedProduct = products.find(product=>product.key===key);
                if(addedProduct){
                    const quantity = productKey[key]
                    addedProduct.quantity = quantity;
                    storeCart.push(addedProduct);
                }
            }
            setCart(storeCart)
        }
    },[products]);
    const searchhandler = event=>{
        const searchText = event.target.value;
        const SearchProduct = products.filter(product=>product.name.toLowerCase().includes(searchText.toLowerCase()));
        setDisplaySearch(SearchProduct);
    }
    const handlerAddToCart = product=>{
        const newCart = [...cart]
        const isCartExiista = cart.find(cartAdd =>cartAdd.key===product.key)
        if(isCartExiista){
            product.quantity += 1;
        }
        else{
            product.quantity = 1;
            newCart.push(product);
        }
        setCart(newCart);
        AddLocalStorage(product.key)
    }
    return (
        <>
        <div className='input-field'>
            <input 
            onChange={searchhandler}
            type="text" 
            placeholder='inter a product name'/>
        </div>
        <div className='shop-container'>
            <div className='product-container'>
                {
                    displaySearch.map(product=><Product 
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
        </>
    );
};

export default Shop;