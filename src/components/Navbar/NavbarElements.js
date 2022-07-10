import styled from "styled-components"
import {FaBars} from "react-icons/fa";
import {GoChevronUp, GoChevronDown} from "react-icons/go"
import {sizes} from "../../GlobalStyles"
import {Dropdown1, Dropdown2} from "../MobileNavbar";


export const NavbarContainer = styled.nav`
    display: flex;
    height: 10vh;
    max-width: ${sizes.desktop};
    margin: 0 auto;
    align-items: center;
    font-size: 1rem;
    
`

export const Logo = styled.img`
    height: 4vh;
    display: flex;
    margin-left: 2em;
    align-self: center;
`
export const MobileBar = styled(FaBars)`
    display: none;
    font-size: 35px;
    width: 100px;
    font-weight: lighter;
    cursor:pointer;
    margin-left: auto;
    @media screen and (max-width:${sizes.tablet}) {
        display: block;
    }
`

export const Links = styled.ul`
    list-style-type: none;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 35%;
    min-width: 375px;
    @media screen and (max-width:${sizes.tablet}) {
        display: none;
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

export const LinksLi = styled.li`
    position: relative;
    outline: 1px green solid;
    display: flex;
    justify-content: flex-end;

    div{
        position:absolute;
        background-color: var(--white);
        box-shadow: 0px 0px 2em 20px hsla(0, 0%, 8%, 0.1);
        border-radius: 10%;
        padding: 2em;
        top:3em;
        font-size: 0.7rem;
        flex-shrink: 0;
    }

    &:nth-of-type(2){
        justify-content: flex-start;
        /* width:100%; */
    }
`

export const Account = styled(Links)`
    margin-left: auto;
    width: 20%;
    min-width:auto;
`

export const AccoundLi = styled(LinksLi)`
`

export const DropDown1 = styled(Dropdown1)`
    margin-left: 0;
`