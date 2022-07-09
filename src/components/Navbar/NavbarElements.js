import styled from "styled-components"
import {FaBars} from "react-icons/fa";
import {GoChevronUp, GoChevronDown} from "react-icons/go"
import {sizes} from "../../GlobalStyles"


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
    /* position:relative; */
    @media screen and (max-width:${sizes.tablet}) {
        display: none;
    }

    div{
        position:absolute;
        top:9%;
        left:12%;
        font-size: 0.7rem;
    }
`

export const UpArrow = styled(GoChevronUp)`
    position: absolute;
`
export const DownArrow = styled(GoChevronDown)`

`

export const LinksLi = styled.li`
`

export const Account = styled(Links)`
    margin-left: auto;
    width: 20%;
    min-width:auto;
`

export const AccoundLi = styled(LinksLi)`
`