import React, { useState } from 'react'
import { useForm } from 'react-hook-form'


export const FormDemo5 = () => {
const {register,handleSubmit, formState:{errors}}= useForm()

console.log("errors", errors)

  const validationSchema = {
        
        emailValidator:{
            required:{
                value:true,
                message:"Email is Required*"
            },
        },
        contactValidator:{
            required:{
                value:true,
                message:"Contact number is required*"
            },
            pattern:{
                value:/[6-9]{1}[0-9]{9}$/,
                message:"invalid contact."
            }
        }, 
        gendervalidator:{
          required:{
            value:true,
            message:"Atleast one feild is selected"
          }
        },
        coursevalidator:{
          required:{
            value:true,
            message:"One checkbox is selected"
          },
          validate:(params)=>{
                return params?.length<=2 || "min 1 course is required*"
            }
        }

        

    }


 const onSubmit = (data)=>{
        alert("form subbmited...")
        console.log(data)
}

  return (
    <div style={{textAlign:"center"}}>
         <form onSubmit={handleSubmit(onSubmit)}>
      <h2>STUDENT REGISTRATION FORM</h2>
      
      <div>
        <label>First Name</label>
      <input placeholder="First Name" {...register("firstName",{required:{value:true,message:"Firstname is required"}})} />
      {errors.firstName?.message}
      </div><br></br>
      
      <div>
        <label>Last Name</label>
      <input placeholder="Last Name" {...register("lastName",{required:{value:true,message:"Lastname is required"}})} />
      {errors.lastName?.message}
      </div><br></br>
      
    <div>
      <label>Email</label>
      <input  type="email" placeholder="Email"  {...register("email",validationSchema.emailValidator)}  />
      {errors.email?.message}
    </div><br></br>

    <div>
      <label>Contact No</label>
      <input  type="tel"  placeholder="Phone"  {...register("phone", validationSchema.contactValidator)} />
      {errors.phone?.message}
    </div><br></br>
     
      <div>
            <label>GENDER</label>  <br></br>
            MALE:<input type='radio' value="male" {...register("gender", validationSchema.gendervalidator)}></input>
            FEMALE:<input type='radio' value="female" {...register("gender",validationSchema.gendervalidator)}></input>
            {errors.gender?.message}
       </div><br></br>
      

      <div>
        <label>Courses</label><br></br>

         Mern stack:<input type='checkbox' {...register("course",validationSchema.coursevalidator)} value="Mern stack"></input>
         AI/ML:<input type='checkbox' {...register("course",validationSchema.coursevalidator)} value="AI/ML"></input>
         UI/UX:<input type='checkbox' {...register("course",validationSchema.coursevalidator)} value="UI/UX"></input>          
         {errors.course?.message}
      
      {/* <select
        {...register("course")}
        defaultValue=""
      >
        <option value="" disabled>Select Course</option>
        <option value="mern">MERN Stack</option>
        <option value="ai">AI/ML</option>
        <option value="uiux">UI/UX</option>
      </select> */}
      </div><br></br>

      <button type="submit">Submit</button>
    </form>
    </div>
  )
}
