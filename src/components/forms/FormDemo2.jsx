import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo2 = () => {

     const {register,handleSubmit}=useForm()
        const [userData, setuserData] = useState({})
      const [isSend, setisSend] = useState(false)
    
      const submitHandler = (data)=>{
        console.log(data) //{} object
        setuserData(data)
        setisSend(true)
      }
  return (
     <div style={{textAlign:"center"}}>
        <h1>CONTACT US</h1><br></br>
        <form onSubmit={handleSubmit(submitHandler)}>
          <div>
            <label>FULL NAME: </label> 
            <input type='text' placeholder='enter name' {...register("fullName")}></input>
          </div><br></br>
          <div>
            <label>EMAIL: </label> 
            <input type='text' {...register("email")}></input>
          </div><br></br>
          <div>
            <label>MESSAGE: </label>
            <textarea name='message' rows='5' {...register("message")}></textarea>
          </div><br></br>
          <div>
            <input type='submit'></input>
          </div>
        </form>

          {
            isSend == true && <div>
          <h1>OUTPUT</h1>
          <h1>Name = {userData.fullName}</h1>
          <h2>Age = {userData.email}</h2>
          <h2>Message ={userData.message}</h2>
        </div>
          }
        
    </div>
  )
}
