import React,{useState} from 'react';
import {connect} from 'react-redux';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import {googleSignInStart, emailSignInStart} from '../../redux/user/user.action';

import {SignInContainer, SignInTitle, SignInButtonContainer} from './sign-in.styles.jsx';

const SignIn = ({emailSignInStart, googleSignInStart}) => {

    const [userCredential, setUserCredential] = useState({email:"", password:""});
    const {email, password} = userCredential;

    const handleSubmit = event =>{
        event.preventDefault();
        emailSignInStart(email, password);
        setUserCredential({email:"", password:""});
    }

    const handleChange = event => {
        const {value, name} = event.target;
        setUserCredential({...userCredential,[name]:value});
    }

    
    return(
        <SignInContainer>
            <SignInTitle>I already have an account</SignInTitle>
            <span>Sign with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput 
                    name="email" 
                    type="email" 
                    value={email} 
                    handleChange={handleChange} 
                    label="Email"
                    required
                />
                <FormInput 
                    name="password" 
                    type="password"
                    value={password} 
                    handleChange={handleChange}
                    label="Password"
                    required
                />
                <SignInButtonContainer>
                    <CustomButton type="submit">
                        Sign In
                    </CustomButton>
                    <CustomButton type="button" onClick={googleSignInStart} isGoogleSignIn>
                        Sign In With Google
                    </CustomButton>
                </SignInButtonContainer>
            </form>
        </SignInContainer>
    )
}


const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({email, password}))
});

export default connect(null, mapDispatchToProps)(SignIn);