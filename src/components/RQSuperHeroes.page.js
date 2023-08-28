import React from 'react'
import { useQuery } from 'react-query'
import axios from "axios"

export default function RQSuperHeroesPage() {
   const {isLoading,data,isError,error}= useQuery("super-heroes",()=>{
       return axios.get("http://localhost:4000/superheroes")
    })

    if(isLoading){
        return <h2>Loading</h2>
    }

    if(isError){
        return <h2>{error.message}</h2>
    }
  return (
    <>
      <h2>
        superheroes page</h2>
        <div>
        {data?.data.map((hero)=>{
            return (<div key={hero.name}>{hero.name}</div>) 
        
        })}</div> 
      
    </>
  )
}
