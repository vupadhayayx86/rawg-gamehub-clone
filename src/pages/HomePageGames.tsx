import React from 'react'
import useFetchData from '../Hooks/useFetchData'
import GameCard from '../components/GameCard'

interface Props{
    id:number,
    background_image:String,
    name:String,
    ratings_count:number,
    metacritic:number,
    rating:String,
    released:String,
    genres:String[]

}

const HomePageGames = () => {
    const [data,setData]=useFetchData("https://api.rawg.io/api/games?key=c6a1c8a293714703b464b60eba3b5125")
   // console.log(data)
  return (
    <div className='d-flex flex-wrap gap-5'>
        {data?.results.map((item:Props)=>(
            <div key={item?.id}>
                <GameCard 
                background_image={item?.background_image} 
                name={item?.name} 
                ratings_count={item?.ratings_count} 
                metacritic={item?.metacritic}
                rating={item?.rating}
                released={item?.released}
                genres={item?.genres}
                
                />
                
            </div>
        ))}
    </div>
  )
}

export default HomePageGames