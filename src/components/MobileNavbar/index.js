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
    <Dropul className = "dropDown1">
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
    <Dropul className = "dropDown2">
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
    <RemainingSpace visible={props.visible}/>
    <NavbarContainer visible={props.visible ? true : false}>
      <CloseIcon src={Cross} alt="A cross" onClick={()=>props.toggleNav(false)} />
        <Links>
            <LinksLi onClick={()=>{
              if (Drop1) {setDrop1(false)}
              else{setDrop1(true)}
            }}><span>features{Drop1 ? <UpArrow/> : <DownArrow/>}</span>
            <Dropdown1/>
            </LinksLi>



            <LinksLi onClick={()=>{
              if (Drop2) {setDrop2(false)}
              else{setDrop2(true)}
            }}><span>company{Drop2 ? <UpArrow/> : <DownArrow/>}</span>
            <Dropdown2/>
            </LinksLi>

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