import React, { useState } from 'react'
import RatingButton from './RatingButton'
import Tooltip from "react-bootstrap/Tooltip"
import { OverlayTrigger } from 'react-bootstrap'
import ExtraContent from './ExtraContent'

interface Props{
    background_image:String,
    name:String,
    ratings_count:number,
    metacritic:number,
    rating:String,
    released:String,
    genres:String[]

}


const GameCard = ({background_image,name,ratings_count,metacritic,rating,released,genres}:Props) => {
    const [showExtra,setShowExtra]=useState(false)
    
    let genreText=" "
    genres.forEach(element => {
      genreText+=element?.name+ ", "
    });

    console.log(genreText)
    const renderTooltip=(props:any)=>(
      <Tooltip id="metascore-tooltip" {...props}>
        Metascore
      </Tooltip>
    )
  return (
    <div className="card text-white bg-dark" onMouseOut={()=>setShowExtra(false)} onMouseOver={()=>setShowExtra(true)} >
        <img src={`${background_image}`} alt="" className="card-img-top" />
        <div className="card-body">
            <OverlayTrigger
            placement="right"
            
            overlay={renderTooltip}
            >
            <div className='metacritic-data'>{metacritic}</div>
            </OverlayTrigger>
            <div className="card-title mt-4" style={{fontSize:'24px',fontWeight:'700'}}>{name}</div>
            <RatingButton ratings_count={ratings_count} />
            {showExtra && 
            <>
            <ExtraContent e_feild="Ratings : " e_value={rating} />
            <ExtraContent e_feild="Released  : " e_value={released} />
            <ExtraContent e_feild="Genres  : " e_value={genreText} />
            
            </>
            
            }
        </div>
    </div>
  )
}

export default GameCard