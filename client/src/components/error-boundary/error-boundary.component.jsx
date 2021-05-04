import React from 'react';

import {ErrorImageOverlay, ErrorImageContainer, ErrorImageText, TryAgainLink} from './error-boundary.styles';

class ErrorBoundary extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            hasErrored: false
        }
    }

    static getDerivedStateFromError(error){
        //process the error

        return {hasErrored: true};
    }

    componentDidCatch(error, info){
        console.log(error);
    }

    render(){
        if(this.state.hasErrored){
            return (
                <ErrorImageOverlay>
                    <ErrorImageContainer imageUrl ='https://i.imgur.com/U3vTGjX.png'/>
                    <ErrorImageText>
                        <h3>Something went wrong,</h3>
                        <span>Check your network connection and...  
                            <TryAgainLink to = '/'>
                                try again!
                            </TryAgainLink>
                        </span>
                    </ErrorImageText>
                </ErrorImageOverlay>
            )
        }

        return this.props.children;
    }
}


export default ErrorBoundary;