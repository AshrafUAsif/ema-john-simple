import React from 'react';
import './Cart.css';
const Cart = ({cart}) => {
    // const cart = props.cart; //Option 1
    // const {cart} = props; //Option 2

    console.log(cart);
    let totalPrice = 0;
    let priceShipping = 0;
    
    for (const product of cart){
        totalPrice = totalPrice + product.price;
        priceShipping = priceShipping + product.shipping;
        
    }
    const tax = totalPrice*7/100;

    const grandTotal = totalPrice + priceShipping + tax;


    return (
        <div className='cart'>
            <h4>Order Summary</h4>
            <p>Selected Items: {cart.length}</p>
            <p>Price: ${totalPrice}</p>
            <p>Shipping: ${priceShipping}</p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <h6>Grand Total: ${grandTotal.toFixed(2)}</h6>
        </div>
    );
};

export default Cart;