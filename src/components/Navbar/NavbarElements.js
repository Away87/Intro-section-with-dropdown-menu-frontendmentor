import styled from "styled-components"
import {FaBars} from "react-icons/fa";
import {GoChevronUp, GoChevronDown} from "react-icons/go"


export const NavbarContainer = styled.nav`
    display: flex;
    outline:1px green solid;
    height: 5em;
    margin: 0 auto;
    align-items: center;
    font-size: var(--fs-s);
`
export const RestSpace = styled.div`
    /* width: 40%;
    height: 100vh;
    z-index: 100;
    position: absolute;
    margin-left: auto;
    background:linear-gradient(
          rgba(0, 0, 0, 0.7), 
          rgba(0, 0, 0, 0.7)); */
`

export const Logo = styled.img`
    height: 1.7em;
    display: flex;
    margin-left: 2em;
`
export const MobileBar = styled(FaBars)`
    display: none;
    font-size: 35px;
    width: 100px;
    font-weight: lighter;
    cursor:pointer;
    margin-left: auto;
    @media screen and (max-width: 50em) {
        display: block;
    }
`

export const Links = styled.ul`
    list-style-type: none;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    gap:clamp(0.5em, 3vw + 0.5em, 5em);
    margin-left:clamp(0.5em, 1vw + 1em, 3em) ;
    min-width: 375px;
    @media screen and (max-width: 50em) {
        display: none;
    }

`

export const LinksLi = styled.li`
    position: relative;
    display: flex;
    justify-content: flex-end;
    color:var(--clr-700);
    cursor:pointer;

    div{
        position:absolute;
        background-color: var(--clr-100);
        box-shadow: 0px 0px 2em 20px hsla(0, 0%, 8%, 0.1);
        border-radius: 5%;
        padding: 1em 1.5em;
        top:3em;
    }

    &:nth-of-type(2){
        justify-content: flex-start;
        /* width:100%; */
    }

    &:hover {
        color:var(--almost-black);
    }
`

export const Account =styled(Links)`
    justify-content: space-between;
    width:auto;
    margin-left: auto;
    min-width: 0;
    margin-right: 2em;
`

export const AccoundLi = styled(LinksLi)`
    &:last-child > button {
        border: 2px solid var(--clr-700);
        padding: 1em;
        line-height: 0;
        
        &:hover {
            border-color: var(--clr-900);
        }
    }
`


export const Button = styled.button `
    background:none;
    border:none;
    font-size:var(--fs-s);
    color:var(--clr-700);
    border-radius:20px;
    line-height: 1;
    cursor:pointer;

    &:hover {
        color:var(--clr-900);
    }
`

export const UpArrow = styled(GoChevronUp)`
    position: absolute;
    left: 100%;
`
export const DownArrow = styled(GoChevronDown)`
    position: absolute;
    left: 100%;
`