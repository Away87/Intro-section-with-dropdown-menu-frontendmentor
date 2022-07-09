import React, {useState} from 'react'
import { 
    // RemainingSpace,
    NavbarContainer,  
    CloseIcon,  
    Links,
    LinksLi,
    Account,
    AccoundLi,
    Button,
    UpArrow,
    DownArrow,
    Dropul,
    Dropli,
    DropIcon,
    Droptext
} from './MobileNavElements';
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
        <DropIcon src={todo} alt=""/> <Droptext><a href="#">todo list</a></Droptext>
      </Dropli>
      <Dropli>
        <DropIcon src={calendar} alt=""/> <Droptext><a href="#">calenders</a></Droptext>
      </Dropli>
      <Dropli>
        <DropIcon src={reminders} alt=""/> <Droptext><a href="#">reminders</a></Droptext>
      </Dropli>
      <Dropli>
        <DropIcon src={planning} alt=""/> <Droptext><a href="#">planning</a></Droptext>
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
        <Droptext><a href="#">history</a></Droptext>
      </Dropli>
      <Dropli>
        <Droptext><a href="#">our team</a></Droptext>
      </Dropli>
      <Dropli>
        <Droptext><a href="#">blog</a></Droptext>
      </Dropli>
    </Dropul>
    </>
  )
}

const MobileNavbar = (props) => {
  const [Drop1, setDrop1] = useState(false)
  const [Drop2, setDrop2] = useState(false)

  return (
    <>
    {/* <RemainingSpace/> */}
    <NavbarContainer>
      <CloseIcon src={Cross} alt="A cross" onClick={()=>props.toggleNav(false)} />
        <Links>
            <LinksLi onClick={()=>{
              if (Drop1) {setDrop1(false)}
              else{setDrop1(true)}
            }}>features {Drop1 ? <DownArrow/> : <UpArrow/>}</LinksLi>
            {Drop1 && <Dropdown1/>}
            <LinksLi onClick={()=>{
              if (Drop2) {setDrop2(false)}
              else{setDrop2(true)}
            }}>company {Drop2 ? <DownArrow/> : <UpArrow/>}</LinksLi>
            {Drop2 && <Dropdown2/>}
            <LinksLi>careers</LinksLi>
            <LinksLi>about</LinksLi>
        </Links>
        <Account>
            <AccoundLi><Button>login</Button></AccoundLi>
            <AccoundLi><Button>register</Button></AccoundLi>
        </Account>
    </NavbarContainer>
    </>
  )
}

export default MobileNavbar