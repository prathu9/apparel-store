import React from 'react';
import {connect} from 'react-redux';

import {toggleCartHidden} from '../../redux/cart/cart.actions';
import {selectCartItemsCount} from '../../redux/cart/cart.selectors';

import {CartIconContainer, ItemCountContainer, ShoppingIcon} from './cart-icon.styles.jsx';


const CartIcon = ({toggleCartHidden, itemCount})=>{
    return(
        <CartIconContainer onClick={toggleCartHidden}>
            <ShoppingIcon className="shopping-icon"/>
            <ItemCountContainer>{itemCount}</ItemCountContainer>
        </CartIconContainer>
    )
}

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = state => ({
    itemCount: selectCartItemsCount(state)
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);