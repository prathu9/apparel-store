import {createSelector} from 'reselect';

const selectMobileNav = state => state.mobileNav;

export const selectMobileNavHidden = createSelector(
    [selectMobileNav],
    mobileNav => mobileNav.mobileNavHidden
)