import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import "/src/assets/css/form3.css"

export const FormDemo3 = () => {

  const { register, handleSubmit, watch, formState: { errors } } = useForm()
  const [userData, setuserData] = useState({})
  const [isSubmited, setisSubmited] = useState(false)
  const [showPassword, setShowPassword] = useState(false)


  const password = watch("pass", "")

  const submitHandler = (data) => {
    setuserData(data)
    setisSubmited(true)
  }

  return (
    <div className='form-container'>
      <h1>LOGIN</h1>

      <form onSubmit={handleSubmit(submitHandler)} className='form-card'>

        {/* Email */}
        <div>
          <label>EMAIL:</label>
          <input 
            type='text'
            {...register("email", {
              required: "Email is required"
            })}
          />
          {errors.email && <span className="error">{errors.email.message}</span>}
        </div>

      {/* Password */}
<div>
  <label>PASSWORD:</label>

  <div className="password-input-wrapper">
    <input
      type={showPassword ? "text" : "password"}
      {...register("pass", {
        required: "Password is required",
        pattern: {
          value: /^(?=.*[0-9])(?=.*[!@#$%^&*])[A-Z].{7,}$/,
          message:
            "Must start with capital, contain 1 number, 1 special character and be 8+ characters"
        }
      })}
    />

    <span
      className="eye-icon"
      onClick={() => setShowPassword(!showPassword)}
    >
      {showPassword ? "🙈" : "👁"}
    </span>
  </div>

  {/* Live Rules */}
  <div className="password-rules">
    <p className={password.length >= 8 ? "valid" : "invalid"}>
      • At least 8 characters
    </p>
    <p className={/^[A-Z]/.test(password) ? "valid" : "invalid"}>
      • First letter must be capital
    </p>
    <p className={/[0-9]/.test(password) ? "valid" : "invalid"}>
      • At least 1 number
    </p>
    <p className={/[!@#$%^&*]/.test(password) ? "valid" : "invalid"}>
      • At least 1 special character
    </p>
  </div>

  {errors.pass && <span className="error">{errors.pass.message}</span>}
</div>


        {/* Checkbox */}
        <div className="checkbox-group">
          <label>
            <input type="checkbox" {...register("check")} />
            Remember Me
          </label>
        </div><br></br>

        <div>
          <input type='submit' />
        </div>

      </form>
    </div>
  )
}
