import React,{ useState } from 'react'
import { PlusLg,Plus } from 'react-bootstrap-icons'

interface Props{
    ratings_count:number
}

const RatingButton = ({ratings_count}:Props) => {
    const [ratings_counts,setRatingsCounts]=useState(ratings_count)
  return (
    <div className='pb-3'>
      <button
    onClick={()=>setRatingsCounts(prevRatings=>prevRatings+1)} 
    type='button' 
    style={{fontWeight:'bold'}} 
    className='btn btn-sm btn-light'>
      <Plus size={20} />{ratings_counts.toLocaleString()}
    </button>
    </div>
  )
}

export default RatingButton