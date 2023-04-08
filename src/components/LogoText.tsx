import React, { ReactElement } from 'react'

interface Props{
  icon:ReactElement,
  text:String,
}


const LogoText = ({icon,text}:Props) => {
  return (
    <div className='ps-1' >
        <span className='logo'>{icon}</span>
        <span>{text}</span>
    </div>
  )
}

export default LogoText