import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;600&display=swap');
    * {
        font-family: 'Montserrat', sans-serif;
    }
    html, body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
`;