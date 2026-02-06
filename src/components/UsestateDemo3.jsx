import React, { useState } from 'react'

export const UsestateDemo3 = () => {
    const [user,setuser]=useState(['parth','jay']);
    const adduser =()=>{
       
        setuser ([...user,'ishani'])
    }

  return (
    <div style={{textAlign:"center"}}>
        <h1>UsestateDemo3</h1>
        {
            user.map((u)=>{
                return<li>{u}</li>
            })
        }
        <button onClick={adduser}>push</button>
    </div>
  )
}
