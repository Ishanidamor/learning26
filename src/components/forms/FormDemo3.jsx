import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo3 = () => {

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
        <h1>LOGIN</h1><br></br>
        <form onSubmit={handleSubmit(submitHandler)}>
          <div>
            <label>EMAIL: </label> 
            <input type='text' required {...register("email")}></input>
          </div> <br></br>
          <div>
            <label>PASSWORD: </label>
            <textarea type='password' name='password' required {...register("pass")}></textarea>
          </div><br></br>
          <div>
            <label>
            <input type="checkbox" name="remember" {...register("check")} /> Remember Me
            </label>
          </div><br></br>
          <div>
            <input type='submit'></input>
          </div>
        </form>

          {
            isSubmited == true && <div>
          <h1>OUTPUT</h1>
          <h1>Email = {userData.email}</h1>
          <h2>Password = {userData.pass}</h2>
          <h2>Rember me= {userData.check ? "Yes" : "No"}</h2>
        </div>
          }
        
    </div>
  )
}
