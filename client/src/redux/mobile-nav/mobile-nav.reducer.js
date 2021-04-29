import {MobileNavActionTypes} from './mobile-nav.types'; 


const INITIAL_STATE = {
    mobileNavHidden : true
}

const mobileNavReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case MobileNavActionTypes.TOGGLE_MOBILE_NAV_HIDDEN:
            return {
                ...state,
                mobileNavHidden: !state.mobileNavHidden
            }
        default:
            return state
    }
}

export default mobileNavReducer;