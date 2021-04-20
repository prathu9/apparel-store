import styled from 'styled-components';

export const SignInContainer = styled.div`
    width:380px;
    display:flex;
    flex-direction: column;
    margin-right:10px;
`;

export const SignInTitle = styled.h1`
    margin:10px 0;
`;

export const SignInButtonContainer = styled.div`
    display: flex;
    justify-content: space-around;

    @media screen and (max-width:850px){
        flex-direction:column;

        button{
            margin-bottom:10px;
        }
    }
`;