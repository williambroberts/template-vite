

type theProps = {
    isHamburger:boolean;
    setIsHamburger:Function;
}
export const Hamburger = ({isHamburger,setIsHamburger}:theProps) => {
  return (
    <section 
    data-open={isHamburger}
    className={`hamburger`}>
        <nav>

        </nav>
    </section>
  )
}
