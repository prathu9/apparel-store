import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import directoryReducer from './directory/directory.reducer';
import shopReducer from './shop/shop.reducer';
import mobileNavReducer from './mobile-nav/mobile-nav.reducer';


const cartPersistConfig = {
    key: 'cart',
    storage,
    blacklist: ['hidden']
}


const rootReducer = combineReducers({
    user: userReducer,
    cart: persistReducer(cartPersistConfig, cartReducer),
    directory: directoryReducer,
    shop: shopReducer,
    mobileNav: mobileNavReducer
});

export default rootReducer;