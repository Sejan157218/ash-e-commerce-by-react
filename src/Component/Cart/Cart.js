import React from 'react';

const Cart = (props) => {
    const {cart} = props;
    const newBalance = (previous,current) => previous + current.price;
    const totalBanlene = cart.reduce(newBalance,0);
    const  newShipping = (previous,current) => previous + current.shipping;
    const totalShipping = cart.reduce(newShipping,0);
    const totalTax = (totalBanlene + totalShipping) * .20;
    const totalAmount = totalBanlene + totalShipping + totalTax ;
    
    return (
        <div>
            <h3>Order Summary</h3>
            <p>Items Ordered : $ {props.cart.length}</p>
            <p>Total Price : $ {totalBanlene.toFixed(2)}</p>
            <p>Total Shipping Cast : $ {totalShipping.toFixed(2)}</p>
            <p>Total Tax : $ {totalTax.toFixed(2)}</p>
            <h5>Total Amount : $ {totalAmount.toFixed(2)}</h5> 
        </div>
    );
};

export default Cart;