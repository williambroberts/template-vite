
import {FiSun,FiMoon} from "react-icons/fi"
import useTheme from "./useTheme"
type ThemeType = "light"|"dark"

function getInitialTheme():ThemeType {
    let initialTheme:any = "light"
    try{
        initialTheme = localStorage.getItem('data-theme')
    }catch(e){

    }
    if (initialTheme){
       
        return initialTheme
    }


    return "light"
}
export const ThemeButton = () => {
    const [theme,handleTheme]=useTheme(getInitialTheme)
  return (
    <button 
    aria-label="theme"
    className="theme__button"
    onClick={handleTheme}>
        {theme==="light"? <FiSun/>:<FiMoon/>}
    </button>
  )
}
