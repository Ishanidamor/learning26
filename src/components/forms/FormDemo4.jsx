import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo4 = () => {

     const {register,handleSubmit}=useForm()
        const [userData, setuserData] = useState({})
      const [isSubmited, setisSubmited] = useState(false)
    
      const submitHandler = (data)=>{
        console.log(data) //{} object
        setuserData(data)
        setisSubmited(true)
      }
  return (
     <div style={{textAlign:"center"}}>
        <h1>FEEDBACK</h1><br></br>
        <form onSubmit={handleSubmit(submitHandler)}>
            <div>
            <label>FULL NAME: </label> 
            <input type='text' placeholder='enter name' {...register("fullName")}></input>
          </div><br></br>
          <div>
            <label>Rate Our Service:</label><br />
        <select name="rating" placeholder='Select Rating'{...register("rating")}>
           <option value=""></option> 
          <option value="excellent">Excellent</option>
          <option value="good">Good</option>
          <option value="average">Average</option>
          <option value="poor">Poor</option>
        </select>
          </div> <br></br>
          <div>
            <label>Comments:</label>
        <textarea name="comments" rows="4" {...register("comment")}/>
            </div><br></br>

          <div>
            <input type='submit'></input>
          </div>
        </form>

          {
            isSubmited == true && <div>
          <h1>OUTPUT</h1>
          <h1>Name = {userData.fullName}</h1>
          <h1>Rate our service = {userData.rating || "Not selected"}</h1>
          <h1>Comments = {userData.comment}</h1>
        </div>
          }
        
    </div>
  )
}
