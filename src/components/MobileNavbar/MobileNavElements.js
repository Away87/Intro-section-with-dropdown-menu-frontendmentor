import styled from "styled-components"
import {GoChevronUp, GoChevronDown} from "react-icons/go"

export const NavbarContainer = styled.div`
    width: 60%;
    height: 100%;
    position: absolute;
    top:0;
    right:0;
    color:var(--clr-700);
    background-color: var(--clr-100);
    font-size: var(--fs-s);
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

    &:hover{
        color:var(--clr-900)
    }
`
export const Account = styled(Links)`
    margin-top: 0;
    margin-left: 0;
`
export const AccoundLi = styled(LinksLi)`
    text-align: center;

    &:last-child > button {
        border: 2px solid var(--clr-700);
        padding: 1em;
    }
    `
export const Button = styled.button `
    border: none;
    border-radius: 1em;
    background: none;
    color:var(--clr-700);
    width: 80%;
    max-width: 20em;
    font-size: var(--fs-s);
    text-transform: capitalize;
`

export const UpArrow = styled(GoChevronUp)`
`
export const DownArrow = styled(GoChevronDown)`
`

// DropDown 1

export const Dropul = styled.ul`
    margin-left:1em;

    @media screen and (min-width: var(--breakpoint-main)){
        margin-left:0;
        font-size: var(--fs-s);
    }
`
export const Dropli = styled(LinksLi)`
    display: flex;
    align-items: center;
    padding: 0;
    font-size: var(--fs-xs);
    
    &:nth-of-type(2) {
        white-space: nowrap;
    }
    
    @media screen and (max-width:var(--breakpoint-main)){
        line-height: 0.5;
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

`
