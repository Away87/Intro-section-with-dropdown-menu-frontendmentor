import React,{useState, useEffect} from 'react'
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
  const [Drop1, setDrop1] = useState(false);
  const [Drop2, setDrop2] = useState(false);

  useInterval(()=>{
    const windowWidth = window.innerWidth
    if (windowWidth > 800) {setMobileNav(false)}
  }, MobileNav ? 100 : null)


  useEffect(()=>{
    const DropDown1 = document.querySelector(".dropDown1")
    const Container = document.querySelector(".Drop1Container")
    DropDown1.style.display = Drop1 ? "block" : "none"
    Container.style.opacity = Drop1 ? "1" : "0"
    Container.style.display = Drop1 ? "block" : "none"
  },[Drop1]);

  useEffect(()=>{
    const DropDown2 = document.querySelector(".dropDown2")
    const Container = document.querySelector(".Drop2Container")
    DropDown2.style.display = Drop2 ? "blocl" : "none"
    Container.style.opacity = Drop2 ? "1" : "0"
    Container.style.display = Drop2 ? "block" : "none"
  },[Drop2]);

  return (
    <>
    <NavbarContainer>
        <Logo src={LogoImg} />
        <MobileBar onClick={()=>setMobileNav(true)}/>
        <MobileNavbar visible={MobileNav ? true : false} toggleNav={()=>setMobileNav()} />
        
        <Links>
            <LinksLi onClick={()=>{
              if (Drop1) {setDrop1(false)}
              else{setDrop1(true)}
            }}><span>features{Drop1 ? <UpArrow/> : <DownArrow/>}</span>
            <div className='Drop1Container'><Dropdown1/></div>
            </LinksLi>



            <LinksLi onClick={()=>{
              if (Drop2) {setDrop2(false)}
              else{setDrop2(true)}
            }}><span>company{Drop2 ? <UpArrow/> : <DownArrow/>}</span>
            <div className='Drop2Container'><Dropdown2/></div>
            </LinksLi>

            <LinksLi><span>careers</span></LinksLi>
            <LinksLi><span>about</span></LinksLi>
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