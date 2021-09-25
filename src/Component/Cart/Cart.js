import React from 'react';

const Cart = (props) => {

    const {cart} = props;
    // const newQuantity=(previous,current)=> previous + current.quantity;
    // let totalQuantity = cart.reduce(newQuantity,0);
    let quantity = 0;
    let totalBanlene = 0
    for(const product of cart){       
        if(!product.quantity){
            product.quantity=1;
        }
        quantity = quantity + product.quantity        
        totalBanlene = totalBanlene + product.price *  product.quantity;      
    }
    // const newBalance = (previous,current) =>previous + (current.price * quantity) ;
    // const totalBanlene = cart.reduce(newBalance,0);
    // const  newShipping = (previous,current) => previous + (current.shipping * quantity);
    // const totalShipping = cart.reduce(newShipping,0);
    // const totalTax = (totalBanlene + totalShipping) * .20;
    // const totalAmount = totalBanlene + totalShipping + totalTax ;
    const  totalShipping = 15;
    const totalTax = (totalBanlene + totalShipping) * .20;
     const totalAmount = totalBanlene + totalTax + totalShipping ;
    
    return (
        <div>
            <h3>Order Summary</h3>
            <p>Items Ordered : {quantity}</p>
            <p>Total Price : $ {totalBanlene.toFixed(2)}</p>
            <p>Total Shipping Cast : $ {totalShipping.toFixed(2)}</p>
            <p>Total Tax : $ {totalTax.toFixed(2)}</p>
            <h5>Total Amount : $ {totalAmount.toFixed(2)}</h5> 
        </div>
    );
};

export default Cart;