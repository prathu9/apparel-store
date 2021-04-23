import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {withRouter} from 'react-router';

import CartItem from '../cart-items/cart-items.component';
import {selectCartItems} from '../../redux/cart/cart.selectors';
import {toggleCartHidden} from '../../redux/cart/cart.actions';
import CustomButton from '../custom-button/custom-button.component';

import {CartDropdownContainer, CartItems, EmptyMessage} from './cart-dropdown.styles.jsx';


const CartDropdown = ({cartItems, history, dispatch})=>{
    return(
        <CartDropdownContainer>
            <CartItems>
                {
                    cartItems.length?
                    cartItems.map(cartItem => 
                        <CartItem key={cartItem.id} item={cartItem}
                    />):<EmptyMessage className="empty-message">Your cart is empty</EmptyMessage>
                }
            </CartItems>
            <CustomButton onClick={()=>{history.push("/checkout"); 
                                    dispatch(toggleCartHidden())}
                                  }>
                Go To Checkout
            </CustomButton>
        </CartDropdownContainer>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
})

export default withRouter(connect(mapStateToProps)(CartDropdown));
