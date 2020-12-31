import React from 'react';
<<<<<<< HEAD
import {connect} from 'react-redux';

import {clearItemFromCart, addItems, removeItem} from '../../redux/cart/cart-action';

import './checkout-item.style.scss';

const CheckoutItem = ({cartItem, clearItem, addItems, removeItem})=>{
    const {imageUrl, name, quantity, price} = cartItem;
=======

import './checkout-item.style.scss';

const CheckoutItem = ({cartItem: {imageUrl, name, quantity, price}})=>{
    console.log(imageUrl);
>>>>>>> 17e019916f7d391867c7908d7289881018c6677a
    return(
    <div className="checkout-item">
        <div className="image-container">
            <img src={imageUrl} alt="item"/>
        </div>
        <span className="name">{name}</span>
<<<<<<< HEAD
        <span className="quantity">
            <div className="arrow" onClick={()=>{removeItem(cartItem)}}>&#10094;</div>
            <div className="value">{quantity}</div>
            <div className="arrow" onClick={()=>{addItems(cartItem)}}>&#10095;</div>
        </span>
        <span className="price">{price}</span>
        <div className="remove-button" 
             onClick={()=>{clearItem(cartItem)}}
        >&#10005;</div>
    </div>
)}

const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItemFromCart(item)),
    addItems: item => dispatch(addItems(item)),
    removeItem: item => dispatch(removeItem(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);
=======
        <span className="quantity">{quantity}</span>
        <span className="price">{price}</span>
        <div className="remove-item">&#10005;</div>
    </div>
)}

export default CheckoutItem;
>>>>>>> 17e019916f7d391867c7908d7289881018c6677a
