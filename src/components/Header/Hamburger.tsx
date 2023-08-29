import { MouseEventHandler } from "react";
import { GiEagleHead } from "react-icons/gi";
import { NavLink } from "react-router-dom";


type theProps = {
    isHamburger:boolean;
    close:MouseEventHandler<HTMLButtonElement>;
}
export const Hamburger = ({isHamburger,close}:theProps) => {
  return (
    <section 
    data-open={isHamburger}
    className={`hamburger`}>
        <nav>
          <section className="flex items-center flex-nowrap w-full justify-between">
          <NavLink 
            className="hamburger__icon"
            to={"/"}><GiEagleHead/></NavLink>
            <span>Name</span>
            <button onClick={close}></button>
          </section>
          <section>
            
          </section>
        </nav>
    </section>
  )
}
