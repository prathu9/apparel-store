import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`

   *{
        box-sizing:border-box;
    }

    body {
		font-family: 'Open Sans Condensed';
		padding: 70px 40px 20px 40px;
        overflow: ${props => props.isMobileNavHidden ? "scroll" : "hidden"};

		@media screen and (max-width: 800px) {
			padding: 70px 0 0 0;
		}
	}

    a{
        text-decoration: none;
        color:#000;
    }
`;