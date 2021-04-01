import React from 'react';

import {SpinnerOverlay, SpinnerContainer} from './with-spinner.styles';


const withSpinner = WrappedComponent => ({isLoading, ...otherprops}) => {
    return(
        isLoading?
            (<SpinnerOverlay>
                <SpinnerContainer />
            </SpinnerOverlay>) :
            (<WrappedComponent {...otherprops}/>)
    )
}

export default withSpinner;