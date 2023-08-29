import { NavLink } from "react-router-dom"
import { ThemeButton } from "../../Theme/ThemeButton"
import { Hamburger } from "./Hamburger"
import React, { memo } from "react"
import {BiMenuAltLeft} from "react-icons/bi"
import {GiEagleHead} from "react-icons/gi"
 const Header = () => {
    const [isHamburger,setIsHamburger]=React.useState<boolean>(false)


    //todo  usecallback
    const open =()=>{
        setIsHamburger(true)
        document.documentElement.style.overflowY="hidden"
    }
    //todo usecallback
    const close = ()=>{
        setIsHamburger(false)
        document.documentElement.style.overflowY="auto"
    }
  return (
    <header >
        <div 
        onClick={close}
        data-open={isHamburger}
        className="hamburger__blur">

        </div>
        <Hamburger isHamburger={isHamburger}
         close={close}
         />
        <nav className="padder">
            <button 
            className="hamburger__button"
            aria-label="menu"
            onClick={open}><BiMenuAltLeft/></button>
            <NavLink 
            className="hamburger__icon"
            to={"/"}><GiEagleHead/></NavLink>
            <section className="sm:flex hidden items-center">
                <NavLink 
                className="hamburger__link"
                to="/">Home</NavLink>
            </section>
            <ThemeButton/>
        </nav>

    </header>
    )
}

export default memo(Header)
