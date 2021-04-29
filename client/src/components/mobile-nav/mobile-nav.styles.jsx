import Styled, {keyframes} from 'styled-components';
import {Link} from 'react-router-dom';

const expand = keyframes`
    0%{
        width:0;
    }
    100%{
        width:80%;
    }
`;

const contract = keyframes`
    0%{
        width:80%;
    }
    100%{
        width:0%;
    }
`;

export const MobileNavOverlay = Styled.div`
    position:absolute;
    top:70px;
    left:0;
    width: 100%;
    min-width:320px;
    height: 120%;
    z-index:20;
    background-color: rgba(0,0,0, 0.2);
    display:block;
    visibility: hidden;
    @media screen and (max-width: 450px){
        visibility: ${props => props.isMobileNavHidden? "hidden" : "visible"};
        transition: visibility 0.5s ease-out;
    }
`;

export const MobileNavContainer = Styled.div`
    position:absolute;
    right:0;
    width:80%;
    height: 100%;
    overflow: scroll;
    overflow-wrap: break-word;
    background-color: #fff;
    color: #000;
    animation-name: ${props => props.isMobileNavHidden? contract : expand};
    animation-duration:0.5s;
    animation-fill-mode:forwards;
    animation-timing-function:ease-in-out;
`

export const MobileNavTitle = Styled.h1`
    text-align: center;
    padding:2px 8px;
    word-wrap: wrap;
`;

export const MobileNavOptionContainer = Styled.div`
    position:absolute;
    width: 100%;
    min-height: 400px;
    overflow:scroll;
    display:flex;
    flex-direction:column;
`;

export const MobileOptionLink = Styled(Link)`
    padding: 10px;
    text-align: center;
    font-size: 24px;
    cursor: pointer;
    font-weight:500;
    text-transform: uppercase;
`;