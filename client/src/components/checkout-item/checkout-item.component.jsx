import React from 'react';
import {connect} from 'react-redux';

import {clearItemFromCart, addItems, removeItem} from '../../redux/cart/cart.actions';

import {CheckoutItemContainer, 
        ImageContainer, 
        TextContainer, 
        QuantityContainer, 
        RemoveButtonContainer} from './checkout-item.style.jsx';

const CheckoutItem = ({cartItem, clearItem, addItems, removeItem})=>{
    const {imageUrl, name, quantity, price} = cartItem;
    return(
    <CheckoutItemContainer>
        <ImageContainer>
            <img src={imageUrl} alt="item"/>
        </ImageContainer>
        <TextContainer>{name}</TextContainer>
        <QuantityContainer>
            <div className="arrow" onClick={()=>{removeItem(cartItem)}}>&#10094;</div>
            <span className="value">{quantity}</span>
            <div className="arrow" onClick={()=>{addItems(cartItem)}}>&#10095;</div>
        </QuantityContainer>
        <TextContainer className="price">{price}</TextContainer>
        <RemoveButtonContainer 
             onClick={()=>{clearItem(cartItem)}}
        >&#10005;</RemoveButtonContainer>
    </CheckoutItemContainer>
)}

const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItemFromCart(item)),
    addItems: item => dispatch(addItems(item)),
    removeItem: item => dispatch(removeItem(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);