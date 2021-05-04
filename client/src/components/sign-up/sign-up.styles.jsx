import styled from 'styled-components';

export const SignUpContainer = styled.div`
    display:flex;
    flex-direction: column;
    width:380px;

    @media screen and (max-width: 850px){
        margin-top:50px;

        button{
            width:100%;
        }
    }

    @media screen and (max-width: 450px){
        width: 300px;
    }
`;

export const SignUpTitle = styled.h1`
    margin:10px 0;
`;
