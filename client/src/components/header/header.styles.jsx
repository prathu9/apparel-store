import Styled from 'styled-components';
import {Link} from 'react-router-dom';


export const HeaderContainer = Styled.div`
    position:fixed;
    top:0;
    left:0;
    padding:10px 40px;
    height: 70px;
    width: 100vw;
    min-width:320px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
    background-color: #fff;
    z-index: 10;

    @media screen and (max-width: 800px){
        height:60px;
        padding:10px;
        margin-bottom:10px;
    }

    @media screen and (max-width: 450px){{
        padding:5px;
    }
`;

export const LogoContainer = Styled(Link)`
    height: 100%;
    width: 70px;
    margin: 5px 0 0 5px;

    @media screen and (max-width: 800px){
        height:50px;
    }
`;

export const OptionContainer = Styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    @media screen and (max-width: 800px){
        width:80%;
    }
`;

export const OptionLink = Styled(Link)`
    padding: 10px 15px;
    cursor: pointer;

    @media screen and (max-width: 450px){
        display:none;
    }
`;