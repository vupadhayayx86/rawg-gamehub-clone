import React, { ReactElement } from 'react'

interface Props{
    genreImages:String[],
    genreText:String[]
}

const ImageText = ({genreImages,genreText}:Props) => {
  return (
    <div>{genreImages.map((item,index)=>(
        <div key={index} className='p-1'>
        <img style={{height:'32px',width:'32px',marginRight:'8px'}} src={`${item}`} alt="Image" />
        <span>{genreText[index]}</span>
        </div>
    ))}</div>
  )
}

export default ImageText