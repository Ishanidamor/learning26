import React from 'react'

export const FunctionDemo1 = () => {

    const test1 =()=>{
            alert("Test function 1 calles...")
    }
    const test2=(x)=>{
        alert("Test 2 function value "+x)

    }
  return (
    <div style={{textAlign:"center"}}>
        <h1>FunctionDemo1</h1>
        <button onClick={test1}>CLICK</button>
        <button onClick={()=>{test2(100)}}>BUTTON 2</button>
        </div>

  )
}
