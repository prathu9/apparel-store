import React from 'react';

import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/Sign-up.component';

import {SignInAndSignUpContainer} from './sign-in-and-sign-up.styles.jsx';


const SignInAndSignUpPage = ()=>{
    return(
        <SignInAndSignUpContainer>
            <SignIn/>
            <SignUp/>
        </SignInAndSignUpContainer>
    )
}

export default SignInAndSignUpPage;