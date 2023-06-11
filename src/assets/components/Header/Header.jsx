import React from 'react'
import { useState } from 'react'
import "./Header.css"
import {BiMenuAltRight} from 'react-icons/bi'
import OutsideClickHandler from "react-outside-click-handler"

function Header() {

  const [menuOpened, setMEnuOpened] = useState(false)

  const getMenuStyles = (menuOpened) => {
    if(document.documentElement.clientWidth <= 1400) 
    {
      return {right: !menuOpened && '-100%'}
    }
  }

  return (
    <section className="h-wrapper">
    <div className="h-container flexCenter paddings innerWidth  ">

        <img src="./logo.png" alt="logo" width={100} />

        <OutsideClickHandler 
        onOutsideClick={()=>{
          setMEnuOpened(false)
        }}
        >

        <div className="h-menu flexCenter" style={getMenuStyles(menuOpened)}>
            <a href="#">Residencies</a>
            <a href="#">Our Value</a>
            <a href="#">Contact Us</a>
            <a href="#">Get Started</a>
           <button className='button'>
            <a href="#">Contact</a>
            </button>
        </div>

        </OutsideClickHandler>

        <div className="menu-icon" onClick= {()=>setMEnuOpened((prev)=>!prev)}>
      <BiMenuAltRight size={30} />
    </div>
    </div>
</section>
  )
}

export default Header