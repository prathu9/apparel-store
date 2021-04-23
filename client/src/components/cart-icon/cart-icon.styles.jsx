import Styled from 'styled-components';

import {ReactComponent as ShoppingIconSVG} from '../../assets/shopping-bag.svg';

export const CartIconContainer = Styled.div`
    width: 45px;
    height: 45px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`; 

export const ShoppingIcon = Styled(ShoppingIconSVG)`
    width: 24px;
    height: 24px;
`;
    
export const ItemCountContainer = Styled.span`
    position: absolute;
    font-size: 10px;
    font-weight: bold;
    bottom: 12px;
`;