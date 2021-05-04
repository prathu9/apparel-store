import {useEffect, useCallback} from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {selectMobileNavHidden} from '../../redux/mobile-nav/mobile-nav.selectors';
import {toggleMobileNavHidden} from '../../redux/mobile-nav/mobile-nav.actions';
import {selectCurrentUser} from '../../redux/user/user.selectors';
import {signOutStart} from '../../redux/user/user.action';

import {MobileNavOverlay, 
        MobileNavContainer, 
        MobileNavTitle,
        MobileNavOptionContainer,
        MobileOptionLink} from './mobile-nav.styles';


const MobileNav = ({toggleMobileNavHidden, 
                    isMobileNavHidden, 
                    currentUser, 
                    signOutStart}) => {

    const toggleMobileNavHiddenOnResize = useCallback(() => {
        const currentWindowSize = window.innerWidth;
        //Checks whether the size of window exceeded 450px (for mobile display)
        // and if Mobile navigation menu is visible to ensure it does not toggle mobile nav
        // hidden state on every window resize.
        if(currentWindowSize > 450 && !isMobileNavHidden){
            toggleMobileNavHidden();
        }
    }, [toggleMobileNavHidden, isMobileNavHidden])

    useEffect(() => {
        //adding event listener on mount
        window.addEventListener("resize", toggleMobileNavHiddenOnResize);                                           
        //Removing event listener on unmount
        return () => {
            window.removeEventListener("resize", toggleMobileNavHiddenOnResize);
        }
    },[toggleMobileNavHiddenOnResize]);

    return(
        <MobileNavOverlay isMobileNavHidden = {isMobileNavHidden}>
            <MobileNavContainer isMobileNavHidden = {isMobileNavHidden}>
                <MobileNavTitle>
                    Welcome, {
                                currentUser? currentUser.displayName : "SignIn"
                             }
                </MobileNavTitle>
                <MobileNavOptionContainer>
                    <MobileOptionLink to = '/' onClick={toggleMobileNavHidden}>
                        Home
                    </MobileOptionLink>
                    <MobileOptionLink to = '/shop' onClick={toggleMobileNavHidden}>
                        Shop
                    </MobileOptionLink>
                    <MobileOptionLink to = '/contact' onClick={toggleMobileNavHidden}>
                        contact
                    </MobileOptionLink>
                    {
                        currentUser?
                        <MobileOptionLink as="div" onClick = {signOutStart}>Sign Out</MobileOptionLink>:
                        <MobileOptionLink to = '/signIn' onClick={toggleMobileNavHidden}>
                            Sign in
                        </MobileOptionLink>
                    }
                </MobileNavOptionContainer>
            </MobileNavContainer>
        </MobileNavOverlay>
    );
}  

const mapStateToProps = createStructuredSelector({
    isMobileNavHidden: selectMobileNavHidden,
    currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
    toggleMobileNavHidden: () => dispatch(toggleMobileNavHidden()),
    signOutStart: () => dispatch(signOutStart())
})

export default connect(mapStateToProps, mapDispatchToProps)(MobileNav);