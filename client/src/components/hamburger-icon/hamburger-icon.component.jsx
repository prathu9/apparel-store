import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {toggleMobileNavHidden} from '../../redux/mobile-nav/mobile-nav.actions';
import {selectMobileNavHidden} from '../../redux/mobile-nav/mobile-nav.selectors';

import {HamburgerIconContainer, HamburgerIconLayer} from './hamburger.styles';


const HamburgerIcon = ({toggleMobileNavHidden, isMobileNavHidden}) => {

    return(
        <HamburgerIconContainer onClick = {toggleMobileNavHidden}>
            <HamburgerIconLayer isMobileNavHidden = {isMobileNavHidden}/>
            <HamburgerIconLayer isMobileNavHidden = {isMobileNavHidden}/>
            <HamburgerIconLayer isMobileNavHidden = {isMobileNavHidden}/>
        </HamburgerIconContainer>
    );
}

const mapStateToProps = createStructuredSelector({
    isMobileNavHidden: selectMobileNavHidden
})

const mapDispatchToProps = dispatch => ({
    toggleMobileNavHidden: () => dispatch(toggleMobileNavHidden())
})


export default connect(mapStateToProps, mapDispatchToProps)(HamburgerIcon);