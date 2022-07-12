import React,{useState} from 'react'
import { useInterval } from 'usehooks-ts'
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
    Button
} from "./NavbarElements.js"
import LogoImg from "../../images/logo.svg"
import MobileNavbar from "../MobileNavbar";
import {Dropdown1, Dropdown2} from "../MobileNavbar";


const Navbar = () => {
  const [MobileNav, setMobileNav] = useState(false)
  const [Drop1, setDrop1] = useState(false)
  const [Drop2, setDrop2] = useState(false)

  useInterval(()=>{
    const windowWidth = window.innerWidth
    if (windowWidth > 800) {setMobileNav(false)}
  }, MobileNav ? 100 : null)

  return (
    <>
    <NavbarContainer>
        <Logo src={LogoImg} />
        <MobileBar onClick={()=>setMobileNav(true)}/>
        <MobileNavbar visible={MobileNav ? true : false} toggleNav={()=>setMobileNav()} />
        <Links>
            <LinksLi onClick={
              ()=> {
                if (Drop1) {setDrop1(false)}
                else {setDrop1(true)}
              }}>
              <span>Features</span>{Drop1?<DownArrow/>:<UpArrow/>}
              {Drop1 &&<div>
                      <Dropdown1/>
                    </div>}
            </LinksLi>

            <LinksLi onClick={
              ()=> {
                if (Drop2) {setDrop2(false)}
                else {setDrop2(true)}
            }}>
              <span>Company</span>{Drop2?<DownArrow/>:<UpArrow/>}
              {Drop2 &&<div>
                      <Dropdown2/>
                    </div>}
            </LinksLi>

            <LinksLi><a href="#"><span>Careers</span></a></LinksLi>

            <LinksLi><a href="#"><span>About</span></a></LinksLi>
        </Links>
        <Account>
            <AccoundLi><button><span>Login</span></button></AccoundLi>
            <AccoundLi><button><span>Register</span></button></AccoundLi>
        </Account>
    </NavbarContainer>
    </>
  )
}

export default Navbar