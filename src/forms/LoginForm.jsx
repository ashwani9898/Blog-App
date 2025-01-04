import React from "react";
import { useForm } from "react-hook-form";
import {login,logout} from "../actions/authActions"
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
const LoginForm = () => {

  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    dispatch(login(data))
    
  };

  return (
    <div className = ""style={{ maxWidth: "400px", margin: "0 auto", padding: "20px" }}>
      <h2 className="p-3 bg-black text-white text-xl font-bold text-center uppercase mb-4">Login</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Email Field */}
        <div style={{ marginBottom: "20px" }}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "Invalid email address",
              },
            })}
            style={{
              display: "block",
              width: "100%",
              padding: "10px",
              marginTop: "5px",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
          />
          {errors.email && (
            <p style={{ color: "red", marginTop: "5px" }}>{errors.email.message}</p>
          )}
        </div>

        {/* Password Field */}
        <div style={{ marginBottom: "20px" }}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            })}
            style={{
              display: "block",
              width: "100%",
              padding: "10px",
              marginTop: "5px",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
          />
          {errors.password && (
            <p style={{ color: "red", marginTop: "5px" }}>
              {errors.password.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <button
          className="bg-black"
          type="submit"
          style={{
            padding: "10px 20px",
            border: "none",
            borderRadius: "4px",
           
            color: "#fff",
            cursor: "pointer",
          }}
        >
          Login
        </button>

        {/* Signup button  */}
        <Link to = {"/signup"}>
        <button
          className="bg-black ml-3"
          style={{
            padding: "10px 20px",
            border: "none",
            borderRadius: "4px",
           
            color: "#fff",
            cursor: "pointer",
          }}
        >
          Sign Up
        </button>
        </Link>
      </form>
    </div>
  );
};

export default LoginForm;
