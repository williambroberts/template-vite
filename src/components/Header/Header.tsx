import { NavLink } from "react-router-dom"
import { ThemeButton } from "../../Theme/ThemeButton"
import { Hamburger } from "./Hamburger"
import React from "react"
import {BiMenuAltLeft} from "react-icons/bi"
export const Header = () => {
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
         setIsHamburger={setIsHamburger}
         />
        <nav className="padder">
            <button 
            className="hamburger__button"
            aria-label="menu"
            onClick={open}><BiMenuAltLeft/></button>
            <section className="sm:flex hidden items-center">
                <NavLink to="/">Home</NavLink>
            </section>
            <ThemeButton/>
        </nav>

    </header>
    )
}
