import React from 'react';

import {CartItemContainer, CartItemImg, ImageDetailContainer} from './cart-items.styles.jsx';


const CartItem = ({item: {imageUrl, name, price, quantity}})=>{
    return(
        <CartItemContainer>
            <CartItemImg src={imageUrl} alt="item"/>
            <ImageDetailContainer>
                <span className="name">{name}</span>
                <span className="price">{quantity} x ${price}</span>
            </ImageDetailContainer>
        </CartItemContainer>
    )
}

export default CartItem;