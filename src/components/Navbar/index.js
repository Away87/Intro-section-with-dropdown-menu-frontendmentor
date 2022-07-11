import React,{useState} from 'react'
import { useInterval } from 'usehooks-ts'
import {
    NavbarContainer,
    RestSpace,

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
  }, 500)
  return (
    <>
    <NavbarContainer>
        <Logo src={LogoImg} />
        <RestSpace></RestSpace>
        <MobileBar onClick={()=>setMobileNav(true)}/>
        {MobileNav ? <MobileNavbar toggleNav={setMobileNav}/> : 
        <>
        <Links>
            <LinksLi onClick={
              ()=> {
                if (Drop1) {setDrop1(false)}
                else {setDrop1(true)}
              }}>
              Features{Drop1?<DownArrow/>:<UpArrow/>}
              {Drop1 &&<div>
                      <Dropdown1/>
                    </div>}
            </LinksLi>

            <LinksLi onClick={
              ()=> {
                if (Drop2) {setDrop2(false)}
                else {setDrop2(true)}
            }}>
              Company{Drop2?<DownArrow/>:<UpArrow/>}
              {Drop2 &&<div>
                      <Dropdown2/>
                    </div>}
            </LinksLi>

            <LinksLi><a href="#">Careers</a></LinksLi>

            <LinksLi><a href="#">About</a></LinksLi>
        </Links>
        <Account>
            <AccoundLi><Button>Login</Button></AccoundLi>
            <AccoundLi><Button>Register</Button></AccoundLi>
        </Account>
        </>}
    </NavbarContainer>
    </>
  )
}

export default Navbar