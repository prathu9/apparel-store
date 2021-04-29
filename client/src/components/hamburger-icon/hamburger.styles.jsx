import Styled,{css} from 'styled-components';


export const HamburgerIconContainer = Styled.div`
    display:none;
    position: relative;
    margin: 0 5px;
    width: 60px;
    height: 50px;
    border: 2px solid #000;
    border-radius: 5px;
    z-index: 50;

    @media screen and (max-width: 450px){
        display: block;
    }
`;

const hamburger = css`
    &:nth-child(1){
        top: 25%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    &:nth-child(2){
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    &:nth-child(3){
        top: 75%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
`;

const close = css`
    &:nth-child(1){
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) rotate(-45deg);
    }

    &:nth-child(2){
        display:none;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    &:nth-child(3){
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) rotate(45deg);
    }
`;

export const HamburgerIconLayer = Styled.div`
    position: absolute;
    width: 80%;
    height: 15%;
    background-color: #000;
    transform-origin:center;
    transition: transform 0.5s;
    ${props => props.isMobileNavHidden ? hamburger : close}
`;
