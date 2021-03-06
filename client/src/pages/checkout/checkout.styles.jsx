import Styled from 'styled-components';


export const CheckoutPageContainer = Styled.div`
    width: 55%;
    min-height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 50px auto 0;

    @media screen and (max-width: 450px){
        width: 90%;

    }
`;

export const CheckoutHeader = Styled.div`
    width: 100%;
    padding: 10px 0;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid darkgrey;

    button{
      margin-left:auto;
      margin-top:50px;
    }
`;

export const HeaderBlock = Styled.div`
    text-transform: capitalize;
        width: 23%;
  
    &:last-child {
        width: 8%;
    }
`;  

export const TotalContainer = Styled.div`
    margin-top: 30px;
    margin-left: auto;
    font-size: 36px;
`;
 
export const TextWarningContainer = Styled.div`
    text-align: center;
    margin-top: 40px;
    font-size: 24px;
    color: red;
`;