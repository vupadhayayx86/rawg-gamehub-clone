import React from 'react'
import useFetchData from '../Hooks/useFetchData'
import GameCard from '../components/GameCard'

interface ElementProp{
    name:String[]
  }

interface Props{
    id:number,
    background_image:String,
    name:String,
    ratings_count:number,
    metacritic:number,
    rating:String,
    released:String,
    genres:ElementProp[],
}


const HomePageGames = () => {
    const [data,setData]=useFetchData("https://api.rawg.io/api/games?key=c6a1c8a293714703b464b60eba3b5125")
    console.log(data)
    
  return (
    <>
    <h1 className="heading-top">New & Trending</h1>
    <div className='d-flex flex-wrap gap-4'>
        {data?.map((item:Props)=>(
            <div key={item.id}>
                <GameCard 
                background_image={item.background_image} 
                name={item.name} 
                ratings_count={item.ratings_count} 
                metacritic={item.metacritic}
                rating={item.rating}
                released={item.released}
                genres={item.genres}
                
                />
                
            </div>
        ))}
    </div>
    </>
    
  )
}

export default HomePageGames