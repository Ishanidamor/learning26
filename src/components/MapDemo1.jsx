import React from 'react'

export const MapDemo1 = () => {
    let cars= ["bmw","audi","mercedes","suzuki"]
  return (
    <div>
        
        <h1>MAP DEMO1</h1>
        {
            cars.map((c)=>{
                return <h1>{c}</h1>
            })
        }

    </div>
  )
}
