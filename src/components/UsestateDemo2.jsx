import React, { useState } from 'react'

export const UsestateDemo2 = () => {

    const[loading,setloading]=useState(true)
    const stoploading=()=>{
       
        setloading(false)

    }

  return (
    
    <div style={{textAlign:"center"}}>
        
        <h1>UsestateDemo2</h1>
        {
            loading == true && <h1>Loading.....</h1>

        }
            
        <button onClick={stoploading}>Stop</button>
    </div>
  )
}
