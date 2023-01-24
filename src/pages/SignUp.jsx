import React from 'react'
import { useState } from 'react'
import { Link } from "react-router-dom"
import { BsFillEyeFill, BsFillEyeSlashFill} from "react-icons/bs"
import { FcGoogle } from "react-icons/fc";
import OAuth from "../components/OAuth"


export default function SignUp() {

  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email:"",
    password: "",
  })
  const {name, email, password} = formData

  function onChange(e){
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }))
  }

  return (
  <section>
    <h1 className='text-3xl text-center mt-6 font-bold'>Sign Up</h1>
    <div className='flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto'>
      <div className='md:w-[67%] lg:-w-[50%] mb-12 md:mb-6'>
        <img src="https://images.unsplash.com/flagged/photo-1564767609342-620cb19b2357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80" className='w-full rounded-2xl' alt="key" />
      </div>
          <div className='w-full md:w-[67%] lg:w-[40%]'>
            <form>
              <input className='w-full px-4 py-2 mb-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out' 
              type="text" 
              id='name' 
              value={name} 
              onChange={onChange} 
              placeholder="Full Name" />
              <input className='w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out' 
              type="email" 
              id='email' 
              value={email} 
              onChange={onChange} 
              placeholder="Email address" />

                  <div className='relative mb-6'>
                  <input className='w-full px-4 py-2 mt-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out' 
              type={showPassword ? "text" : "password"} 
              id='password' 
              value={password} 
              onChange={onChange} 
              placeholder="Password"/>
              {showPassword ? (<BsFillEyeSlashFill onClick={() => setShowPassword((prevState) => !prevState)} className='absolute right-4 top-5 text-xl cursor-pointer' />) : (<BsFillEyeFill onClick={() => setShowPassword((prevState) => !prevState)} className="absolute right-4 top-5 text-xl cursor-pointer" />)}
                  </div>

                    <div className='flex justify-between whitespace-nowrap text-sm sm:text-lg'>
                       <p className='flex'>
                        Have an account?
                        <Link to="/sign-in"> <p className='font-semibold cursor-pointer text-blue-700 ml-1 text-center'>Sign In</p></Link></p>
                        <p className='text-red-500'>
                          <Link to="/forgot-password">Forgot Password?</Link></p> 
                    </div>
            </form>
            <button type='submit' className='w-full mt-2 px-6 py-2 text-white font-medium uppercase rounded-md bg-blue-600 hover:bg-blue-700 active:bg-blue-900 hover:shadow-xl transition-all ease-in-out'>Sign up</button>
            <div className='my-2 font-bold before:border-t flex before:flex-1 items-center before:border-gray-300 after:flex-1 after:border-t after:border-gray-300'>
            <p className='text-center mx-3'>OR</p>
            </div>
            <OAuth />
            
          </div>
    </div>
  </section>
    )
}
