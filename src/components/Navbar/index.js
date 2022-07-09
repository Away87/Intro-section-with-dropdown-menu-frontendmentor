import React,{useState} from 'react'
import {
    NavbarContainer,
    Logo,
    MobileBar,
    Links,
    LinksLi,
    Account,
    AccoundLi,
    UpArrow,
    DownArrow,
} from "./NavbarElements.js"
import LogoImg from "../../images/logo.svg"
import MobileNavbar from "../MobileNavbar";
import {Dropdown1, Dropdown2} from "../MobileNavbar";


const Navbar = () => {
  const [MobileNav, setMobileNav] = useState(false)
  return (
    <>
    <NavbarContainer>
        <Logo src={LogoImg} />
        <MobileBar onClick={()=>setMobileNav(true)}/>
        {MobileNav ? <MobileNavbar toggleNav={setMobileNav}/> : 
        <>
        <Links>
            <LinksLi>
            Features <UpArrow/>
            <div>
              <Dropdown1/>
            </div>
            </LinksLi>

            <LinksLi>Company <UpArrow/></LinksLi>
            <LinksLi>Careers</LinksLi>
            <LinksLi>About</LinksLi>
        </Links>
        <Account>
            <AccoundLi>Login</AccoundLi>
            <AccoundLi>Register</AccoundLi>
        </Account>
        </>}
    </NavbarContainer>
    </>
  )
}

export default Navbar