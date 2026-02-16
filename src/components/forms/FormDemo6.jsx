import { useState } from 'react'
import { useForm } from 'react-hook-form'
import "/src/assets/css/form.css"



export const FormDemo6 = () => {
    const {register,handleSubmit,watch, formState:{errors}}=useForm()

    const selectedCountry = watch("country")

    const countryStateData={
      India: ["Gujarat","Maharastra","Rajesthan"],
      USA:["Callifornia","Texas","Florida"],
      Canada:["Ontario","Quebec"]
    }

    console.log("errors", errors)

       const onSubmit = (data)=>{
        alert("form subbmited...")
        console.log(data)
    }


  return (
    <div className="form-container">
        <form onSubmit={handleSubmit(onSubmit)} className="form-card">
      <h2>Job Application</h2>

      <input
        placeholder="Full Name"
        {...register("fullName", { required: "Full name is required" })}
      />
      <p>{errors.fullName?.message}</p>

      <input
        type="email"
        placeholder="Email"
        {...register("email", { required: "Email is required" })}
      />
      <p>{errors.email?.message}</p>

      <input
        type="tel"
        placeholder="Phone"
        {...register("phone", { required: "Phone is required" })}
      />
      <p>{errors.phone?.message}</p>

      <input
        type="number"
        placeholder="Experience"
        {...register("experience", { required: "Experience is required" })}
      />
      <p>{errors.experience?.message}</p>

      <select
        {...register("position", { required: "Position is required" })}
        defaultValue=""
      >
        <option value="" disabled>Select Position</option>
        <option value="frontend">Frontend Developer</option>
        <option value="backend">Backend Developer</option>
        <option value="fullstack">Full Stack Developer</option>
      </select>
      <p>{errors.position?.message}</p>

      <div>
        <select {...register("country", { required: "Country is required" })}defaultValue=""
>
         <option value="" disabled>Select Country</option>
         {Object.keys(countryStateData).map((country) => (
    
        <option key={country} value={country}>
        {country}
         </option>
        ))}
        </select>
        {errors.country?.message}

      </div>

      <select {...register("state", { required: "State is required" })} disabled={!selectedCountry} defaultValue=""
>
      <option value="" disabled>Select State</option>

      {selectedCountry &&
      countryStateData[selectedCountry]?.map((state) => (
      <option key={state} value={state}>
      {state}
      </option>
      ))}
      </select>
      {errors.state?.message}


      <textarea
        placeholder="Address"
        {...register("address", { required: "Address is required" })}
      />
      <p>{errors.address?.message}</p>

      <button type="submit">Apply</button>
    </form>
    </div>
  )
}
