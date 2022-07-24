import styled,{keyframes} from "styled-components"
import {GoChevronUp, GoChevronDown} from "react-icons/go"

export const RemainingSpace = styled.div`
    position:absolute;
    top:0;
    left:${props=>props.visible? "0" : "-100%" };
    width:100%;
    height: 100%;
    background: rgba(0, 0, 0, 1);
    opacity: ${props=>props.visible ? "0.7" : "0"};
    z-index:var(--z-index-900);
    transition: opacity 0.5s ease-in 0.1s;
`

export const NavbarContainer = styled.div`
    width: 60%;
    height: 100%;
    /* position: absolute; */
    top:0;
    right:0;
    /* z-index:var(--z-index-900); */
    color:var(--clr-700);
    background-color: var(--clr-100);
    font-size: var(--fs-s);
    transform: translateX(${props=>props.visible ? "0" : "100%"});
    transition:transform 0.2s ease-in;

    position: fixed;
    z-index: 1000;
    transition: transform 0.5s ease-in 0.1s;
`

export const CloseIcon = styled.img`
    position:absolute;
    top: 1em;
    right:1em;
    cursor: pointer;
`

export const Links = styled.ul`
    margin-left: 1.5em;
    margin-top: 4em;
    text-transform: capitalize;
`
export const LinksLi = styled.li`
    line-height: 2.5em;
    cursor: pointer;

    span:hover {
        color:var(--clr-900);
    }
`
export const Account = styled(Links)`
    margin-top: 0;
    margin-left: 0;
`
export const AccoundLi = styled(LinksLi)`
    text-align: center;

    button {
        border: none;
        border-radius: 1em;
        background: none;
        color:var(--clr-700);
        width: 80%;
        max-width: 20em;
        font-size: var(--fs-s);
        text-transform: capitalize;
        cursor: pointer;
    }
    &:last-child > button {
        border: 2px solid var(--clr-700);
        padding: 1em;

        &:hover {
            border-color:var(--clr-900)
        }
    }
`
export const UpArrow = styled(GoChevronUp)`

`
export const DownArrow = styled(GoChevronDown)`
`

// DropDown 1

export const Dropul = styled.ul`
    margin-left:1em;    
    @media screen and (min-width: 50em){
        margin-left:0;
    }
`
export const Dropli = styled(LinksLi)`
    display: flex;
    align-items: center;
    padding: 0;
    font-size: var(--fs-s);
    
    &:nth-of-type(2) {
        white-space: nowrap;
    }
    
    &:hover{
        color:var(--clr-900)
    }
    `
export const DropIcon = styled.img`
    width: 1.5em;
    height: 1.5em;
    margin-right: 10px;
    `
export const Droptext = styled.p`
    text-transform: capitalize;
    white-space: nowrap;
    /* color: var(--clr-700); */
    &:hover{
        color:var(--clr-900)
    }
`
