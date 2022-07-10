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
    DropDown1
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
              Features<UpArrow/>
              <div>
                <DropDown1/>
              </div>
            </LinksLi>

            <LinksLi>
              Company<UpArrow/>
              <div>
                <Dropdown2/>
              </div>
            </LinksLi>

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