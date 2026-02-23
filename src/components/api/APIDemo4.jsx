import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import "/src/assets/css/api.css"


export const APIDemo4 = () => {

  const { register, handleSubmit, reset } = useForm();

  const submitHandler = async (data) => {
    try {
      const response = await axios.post(
        "https://node5.onrender.com/user/user/",
        data
      );

      alert("User Registered Successfully");
      reset();

    } catch (error) {
      alert("Something went wrong");
    }
  };

  return (
    <div className="form-container">
      <div className="form-card">
        <h2>Register User</h2>

        <form onSubmit={handleSubmit(submitHandler)}>

          <div className="form-group">
            <label>Name</label>
            <input type="text" {...register("name")} />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input type="email" {...register("email")} />
          </div>

          <div className="form-group">
            <label>Age</label>
            <input type="number" {...register("age")} />
          </div>

          <div className="form-group checkbox-group">
            <input type="checkbox" {...register("isActive")} />
            <span>Is Active</span>
          </div>

          <div className="form-group">
            <label>Password</label>
            <input type="password" {...register("password")} />
          </div>

          <button type="submit" className="submit-btn">
            Submit
          </button>

        </form>
      </div>
    </div>
  );
};
