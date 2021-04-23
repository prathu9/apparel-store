import Styled from 'styled-components';

export const CheckoutItemContainer = Styled.div`
    width: 100%;
    display: flex;
    min-height: 100px;
    border-bottom: 1px solid darkgrey;
    padding: 15px 0;
    font-size: 20px;
    align-items: center;
`;

export const ImageContainer = Styled.div`
    width: 23%;
    padding-right: 15px;

    img{
      width: 100%;
      height: 100%;
    }
`;

export const TextContainer = Styled.span`
    width: 23%;
`;

export const QuantityContainer = Styled(TextContainer)`
    display:flex;
    margin-right:10px;

    span{
      margin: 0 10px;
    }

    div{
      cursor: pointer;
    }
`;
  
export const RemoveButtonContainer = Styled.div`
    padding-left: 12px;
    cursor: pointer;
`;