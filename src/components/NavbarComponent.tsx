import React, { useEffect, useState } from 'react'
import {Sun,Moon,Bell,PlusLg} from "react-bootstrap-icons"

const NavbarComponent = () => {
    const [darkMode,setDarkMode]=useState<boolean>(false)
    const [inputColor,setInputColor]=useState("")
    
    useEffect(()=>{
        if(darkMode){
            document.body.setAttribute("data-bs-theme","dark")
            setInputColor("text-light bg-dark")
        } else {
            document.body.setAttribute("data-bs-theme","light")
            setInputColor("")
        }
        console.log(darkMode)
    },[darkMode])
  return (
        <nav className="navbar navbar-expand-lg">
            <a href="#" className="logo-text">RAW G!</a>
            <input type="text"  className={`form-control w-75 mx-5 rounded-pill ${inputColor}`} placeholder='Search' />
            <button type='button' className="btn btn-outline p-2" onClick={()=>setDarkMode(!darkMode)}>{darkMode?<Moon color="grey" size={22}/>:<Sun  size={22}/>}</button>
            <span className='p-1'><Bell size={22}/></span>
            <span className='p-2'><PlusLg size={22}/></span>
            
        </nav>
    
  )
}

export default NavbarComponent