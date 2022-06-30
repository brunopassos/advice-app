import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
    }

    body{
        background-color: var(--primary-color);
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100vh;
    }

    :root{
        --primary-color: #202632;
        --secondary-color: #313A49;
        --text-secondary-color: #4CDB97;
        --text-primary-color: #C5D9DF;
        --btn-color:#53FFAB;
    }

`