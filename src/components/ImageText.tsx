import React, { ReactElement } from 'react'

interface Props{
    genreImages:String[]
}

const ImageText = ({genreImages}:Props) => {
  return (
    <div>{genreImages.map((item)=>(
        <div className='p-1'>
        <img style={{height:'32px',width:'32px',marginRight:'8px'}} src={`${item}`} alt="Image" />
        <span>{(item.toString()).slice(19,item.toString().lastIndexOf("."))}</span>
        </div>
    ))}</div>
  )
}

export default ImageText