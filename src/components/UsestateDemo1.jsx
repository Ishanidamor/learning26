import React, { useState } from 'react'
import { CardComponent } from './CardComponent'


export const UsestateDemo1 = () => {

   // var count=0;
     const[count,setcount]=useState(0)
    const increasecount =() =>{
        console.log("count before increment",count)
       // count++;
        setcount(count+1)
       console.log("count after increment",count)
    }
  return (
    <div style={{textAlign:"center"}}>
        <h1>UsestateDemo1</h1>
        <h1>Count = {count}</h1>
        <button onClick={increasecount}>+</button>

        <CardComponent title ="USE STATE DEMO"></CardComponent>
    </div>
  )
}
