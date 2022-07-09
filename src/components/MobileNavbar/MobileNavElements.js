import styled from "styled-components"
import {GoChevronUp, GoChevronDown} from "react-icons/go"
import {sizes} from "../../GlobalStyles"

// export const RemainingSpace = styled.div`
//     width:40%;
//     height: 100%;
//     margin-left:auto;
//     opacity:0.5;
// `
export const NavbarContainer = styled.div`
    width: 60%;
    height: 100%;
    position: absolute;
    top:0;
    right:0;
    color:var(--medium-grey);
    background-color: var(--white);
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
        color:var(--almost-black)
    }
`
export const Account = styled(Links)`
    margin-top: 0;
    margin-left: 0;
`
export const AccoundLi = styled(LinksLi)`
    text-align: center;

    &:last-child > button {
        border: 2px solid var(--medium-grey);
        padding: 1em;
    }
    `
export const Button = styled.button `
    border: none;
    border-radius: 1em;
    background: none;
    color:var(--medium-grey);
    width: 80%;
    max-width: 20em;
    font-size: 1rem;
    text-transform: capitalize;
`

export const UpArrow = styled(GoChevronUp)`

`
export const DownArrow = styled(GoChevronDown)`
    /* position: absolute; */
`

// DropDown 1

export const Dropul = styled.ul`
    margin-left:1em;
`
export const Dropli = styled(LinksLi)`
    display: flex;
    line-height: 2.5em;
    align-items: center;
    padding: 0;
`
export const DropIcon = styled.img`
    width: 1.5em;
    height: 1.5em;
    margin-right: 10px;
`
export const Droptext = styled.p`
    text-transform: capitalize;
    font-size: 1rem;

`
