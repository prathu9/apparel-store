import React, {useState} from 'react';
import {connect} from 'react-redux';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';


import {signUpStart} from '../../redux/user/user.action';

import {SignUpContainer, SignUpTitle} from './sign-up.styles.jsx';


const SignUp = ({signUpStart}) => {

    const [userCredential, setUserCredential] = useState({
        displayName:"",
        email:"",
        password:"",
        confirmPassword:""
    });

    const {displayName, email, password, confirmPassword} = userCredential;

    const handleSubmit = event => {
        event.preventDefault();
        
        if(password !== confirmPassword){
            alert("Password did not match");
            return;
        }
        
        signUpStart({displayName, email, password});
     
    }

    const handleChange = event =>{
        const {name, value} = event.target;
        setUserCredential({...userCredential, [name]:value});
    }

    
    return(
        <SignUpContainer>
            <SignUpTitle>I do not have an account</SignUpTitle>
            <span>Sign up with Email and Password</span>
            <form className="sign-up-form" onSubmit={handleSubmit}>
                <FormInput 
                    type = "text"
                    name = "displayName"
                    value = {displayName}
                    onChange = {handleChange}
                    label = "Display Name"
                    required
                />
                <FormInput 
                    type = "email"
                    name = "email"
                    value = {email}
                    onChange = {handleChange}
                    label = "Email"
                     required
                />
                <FormInput 
                    type = "password"
                    name = "password"
                    value = {password}
                    onChange = {handleChange}
                    label = "Password"
                    required
                />
                <FormInput 
                    type = "confirmPassword"
                    name = "confirmPassword"
                    value = {confirmPassword}
                    onChange = {handleChange}
                    label = "Confirm Password"
                    required
                />
               <CustomButton type="submit">SIGN UP</CustomButton>
               
            </form>
        </SignUpContainer>
    )
}


const mapDispatchToProps = dispatch => ({
    signUpStart: (userCredential) => dispatch(signUpStart(userCredential))
})

export default connect(null, mapDispatchToProps)(SignUp);