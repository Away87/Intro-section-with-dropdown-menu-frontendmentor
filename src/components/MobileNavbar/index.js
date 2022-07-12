import React, {useState, useEffect} from 'react'
import { 
    RemainingSpace,
    NavbarContainer,  
    CloseIcon,  
    Links,
    LinksLi,
    Account,
    AccoundLi,
    UpArrow,
    DownArrow,
    Dropul,
    Dropli,
    DropIcon,
    Droptext
} from './MobileNavElements';
import {useInterval} from "usehooks-ts"
import Cross from "../../images/icon-close-menu.svg";
import todo from "../../images/icon-todo.svg"
import calendar from "../../images/icon-calendar.svg"
import reminders from "../../images/icon-reminders.svg"
import planning from "../../images/icon-planning.svg"

export const Dropdown1 = ()=>{
  return(
    <>
    <Dropul>
      <Dropli>
        <DropIcon src={todo} alt=""/> <Droptext><a href="#"><span>todo list</span></a></Droptext>
      </Dropli>
      <Dropli>
        <DropIcon src={calendar} alt=""/> <Droptext><a href="#"><span>calenders</span></a></Droptext>
      </Dropli>
      <Dropli>
        <DropIcon src={reminders} alt=""/> <Droptext><a href="#"><span>reminders</span></a></Droptext>
      </Dropli>
      <Dropli>
        <DropIcon src={planning} alt=""/> <Droptext><a href="#"><span>planning</span></a></Droptext>
      </Dropli>
    </Dropul>
    </>
  )
}

export const Dropdown2 = ()=>{
  return(
    <>
    <Dropul>
      <Dropli>
        <Droptext><a href="#"><span>history</span></a></Droptext>
      </Dropli>
      <Dropli>
        <Droptext><a href="#"><span>our team</span></a></Droptext>
      </Dropli>
      <Dropli>
        <Droptext><a href="#"><span>blog</span></a></Droptext>
      </Dropli>
    </Dropul>
    </>
  )
}

const MobileNavbar = (props) => {
  const [Drop1, setDrop1] = useState(false);
  const [Drop2, setDrop2] = useState(false);

  useEffect(()=>{
    const Container = document.getElementById("navContainer");
    if (props.visible) {
      // Container.classList.add("visible")
    } else {Container.classList.remove("visible")};
  },[props.visible])

  return (
    <>
    <RemainingSpace visible={props.visible}/>
    <NavbarContainer id="navContainer" visible={props.visible ? true : false}>
      <CloseIcon src={Cross} alt="A cross" onClick={()=>props.toggleNav(false)} />
        <Links>
            <LinksLi onClick={()=>{
              if (Drop1) {setDrop1(false)}
              else{setDrop1(true)}
            }}><span>features</span>{Drop1 ? <DownArrow/> : <UpArrow/>}</LinksLi>

            {Drop1 && <Dropdown1/>}

            <LinksLi onClick={()=>{
              if (Drop2) {setDrop2(false)}
              else{setDrop2(true)}
            }}><span>company</span>{Drop2 ? <DownArrow/> : <UpArrow/>}</LinksLi>

            {Drop2 && <Dropdown2/>}

            <LinksLi><span>careers</span></LinksLi>
            <LinksLi><span>about</span></LinksLi>
        </Links>
        <Account>
            <AccoundLi><button><span>login</span></button></AccoundLi>
            <AccoundLi><button><span>register</span></button></AccoundLi>
        </Account>
    </NavbarContainer>
    </>
  )
}

export default MobileNavbar