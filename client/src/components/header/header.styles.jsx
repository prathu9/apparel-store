import Styled from 'styled-components';
import {Link} from 'react-router-dom';


export const HeaderContainer = Styled.div`
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;

    @media screen and (max-width){
        height:60px;
        padding:10px;
        margin-bottom:10px;
    }
`;

export const LogoContainer = Styled(Link)`
    height: 100%;
    width: 70px;
    padding: 25px;

    @media screen and (max-width){
        height:50px;
        padding:0;
    }
`;

export const OptionContainer = Styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    @media screen and (max-width){
        width:80%;
    }
`;

export const OptionLink = Styled(Link)`
    padding: 10px 15px;
    cursor: pointer;
`;