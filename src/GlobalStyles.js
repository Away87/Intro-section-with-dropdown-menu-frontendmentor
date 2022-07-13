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
        height: 100vh;
        overflow:hidden;
    }

    :root {
        --clr-100: hsl(0, 0%, 100%);
        --clr-200 : hsl(0, 0%, 98%);
        --clr-700: hsl(0, 0%, 41%);
        --clr-900: hsl(0, 0%, 8%);

        --fs-xl:clamp(3.5rem, 1vw + 0.05rem, 8rem);
        --fs-l: clamp(1.5rem, 1vw + 0.05rem, 2rem);
        --fs-s: clamp(1rem, 1vw + 0.05rem, 2rem);
        --fs-xs: clamp(0.5rem, 1vw + 0.05rem, 0.9rem);

        --br-main: 50em;
    }

    a {
        color: var(--clr-700);
        text-decoration: none;
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
`


