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

  useInterval(()=>{
    const windowWidth = window.innerWidth
    if (windowWidth > 800) {setMobileNav(false)}
  }, MobileNav ? 100 : null)

  const [Drop1, setDrop1] = useState(false);
  const [Drop2, setDrop2] = useState(false);

  useEffect(()=>{
    const DropDown1 = document.querySelector(".dropDown1")
    let visible = false;
    Drop1 ? visible = true : visible = false
    DropDown1.style.display = visible ? "block" : "none"
  },[Drop1]);

  useEffect(()=>{
    const DropDown2 = document.querySelector(".dropDown2")
    let visible = false;
    Drop2 ? visible = true : visible = false
    DropDown2.style.display = visible ? "block" : "none"
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
            }}><span>features</span>{Drop1 ? <UpArrow/> : <DownArrow/>}
            <Dropdown1/>
            </LinksLi>



            <LinksLi onClick={()=>{
              if (Drop2) {setDrop2(false)}
              else{setDrop2(true)}
            }}><span>company</span>{Drop2 ? <UpArrow/> : <DownArrow/>}
            <Dropdown2/>
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