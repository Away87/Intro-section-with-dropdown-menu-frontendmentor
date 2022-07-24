import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Epilogue', sans-serif;
        -webkit-tap-highlight-color: transparent;
    }

    body , html {
        width: 100%;

        ::-webkit-scrollbar{
            width:10px;
        }

        ::-webkit-scrollbar-track{
            background-color:-var(--clr-100);
        }

        ::-webkit-scrollbar-thumb{
            background-color:rgba(100,100,100,0.2);
        }

        ::-webkit-scrollbar-thumb:hover{
            background-color:rgba(23,23,23,0.2);
        }
    }
    :root {
        --clr-100: hsl(0, 0%, 100%);
        --clr-200 : hsl(0, 0%, 98%);
        --clr-700: hsl(0, 0%, 41%);
        --clr-900: hsl(0, 0%, 8%);

        --fs-xl:clamp(3.5rem, 1vw + 0.05rem, 8rem);
        --fs-l: clamp(1.5rem, 5vw + 0.05rem, 6rem);
        --fs-s: clamp(1rem, 1vw + 0.05rem, 6rem);
        --fs-xs: clamp(0.9rem, 1vw + 0.05rem, 0.9rem);

        --z-index-900: 100;
        --z-index-500:50;
        --z-index-100: 0;

    }

    a {
        color: var(--clr-700);
        text-decoration: none;
    }

    main {
        background-color:var(--clr-100);
        
        @media screen and (min-width:40em) {
            width:100%;
            display:flex;
            margin:0 auto;
            align-items: center;
            height: calc(100vh - 5.3em);
        }
    }

    // CSS RESET

    html, body, div, span, applet, object, iframe,
    blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        vertical-align: baseline;
    }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    body {
        line-height: 1;
    }
    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }

    a:-webkit-any-link {
        cursor:auto;
    }
`


