import styled,{keyframes} from 'styled-components'

const fadeIn = keyframes`
    0% {opacity:0;}
    100% {opacity:1;}
`

const LeftToRight = keyframes`
    0% {transform:translateX(-100%);}
    100% {transform:translateX(0%);}
`

export const Container = styled.div`
    width: 100%;
    overflow:hidden;
    padding-bottom: 5em;  
    @media screen and (min-width:40em) {
        height:34em;
        display:flex;
        flex-direction: row-reverse;
        padding-bottom: 0;
        justify-content: space-evenly;
        align-items: center;
    }
`

export const PictureGroup = styled.picture`
    padding-right:1em;
    & > * {
        width:100%;
        max-width:40em;
        min-width:20em;
        animation:${LeftToRight} 0.2s ease-in;
    }
    
    @media screen and (min-width:40em) {
        & > * {
            max-width:25em;
            animation:${fadeIn} 0.5s ease-in;
        }
    }
`

export const TextContainer = styled.div`
    text-align: center;
    padding:2em 1.5em;
    height: 100%;
    display: flex;
    align-items: center;
    overflow:hidden;
    height: 100%;
    
    @media screen and (min-width:40em) {
        text-align: start;
        width:40%;
        padding: 0 1.5em;
    }

    div{

        display:flex;
        flex-direction:column;
        gap: 2em;
        position: relative;
        
        & > * {
            animation:${LeftToRight} 300ms ease-in;
        }
    }
`
export const Heading = styled.h1`
    font-size: var(--fs-l);
    @media screen and (min-width:40em) {
        font-size: var(--fs-l);

        span{
            white-space: nowrap;
        }
    }
`
export const Paragraph = styled.p`
    line-height: 1.5;
    color: var(--clr-700);
    font-size: var(--fs-xs);
    @media screen and (min-width:40em) {
        font-size: var(--fs-s);
    }
`
export const Button = styled.button`
    width: clamp(7em, 12vw + 1em, 10em);
    height:clamp(3rem, 12vw + 1em, 3.5em);
    font-size: var(--fs-s);
    margin: 0 auto;
    color: var(--clr-100);
    background-color:var(--clr-900);
    border:none;
    border-radius: 10px;
    cursor: pointer;

    &:hover {
    transform:scale(1.1);
    transition:transform 0.2s ease-in;
    }

    @media screen and (min-width:40em) {
        margin:0;
    }
`

export const Clients = styled.ul`
    width:100%;
    display:flex;
    flex-wrap: wrap;
    gap:1em;
    justify-content: space-between;

    @media screen and (min-width:40em) {
        padding: 0;
        position: absolute;
        bottom: -32%;
    }
    `
export const ClientLi = styled.li`
    display:flex;
    justify-content: center;
    align-items: center;
    `
export const ClientImg = styled.img`
    max-width: 150px;
    width:80%;
`
