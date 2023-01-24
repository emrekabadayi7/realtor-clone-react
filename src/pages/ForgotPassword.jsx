import React from 'react'
import { useState } from 'react'
import { Link } from "react-router-dom"
import { BsFillEyeFill, BsFillEyeSlashFill} from "react-icons/bs"
import { FcGoogle } from "react-icons/fc";
import OAuth from "../components/OAuth"


export default function ForgotPassword() {

  const [email, setEmail] = useState("")

  function onChange(e){
    setEmail(e.target.value);
  }

  return (
  <section>
    <h1 className='text-3xl text-center mt-6 font-bold'>Forgot Password</h1>
    <div className='flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto'>
      <div className='md:w-[67%] lg:-w-[50%] mb-12 md:mb-6'>
        <img src="https://images.unsplash.com/flagged/photo-1564767609342-620cb19b2357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80" className='w-full rounded-2xl' alt="key" />
      </div>
          <div className='w-full md:w-[67%] lg:w-[40%]'>
            <form>
              <input className='w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out' 
              type="email" 
              id='email' 
              value={email} 
              onChange={onChange} 
              placeholder="Email address" />

                    <div className='flex mt-3 justify-between whitespace-nowrap text-sm sm:text-lg'>
                       <p className='flex'>
                        Don't have an account?
                        <Link to="/sign-up"> <p className='font-semibold cursor-pointer text-blue-700 ml-1 text-center'>Register</p></Link></p>
                        <p className='text-red-500'>
                          <Link to="/sign-in">Sign in instead</Link></p> 
                    </div>
            </form>
            <button type='submit' className='w-full mt-2 px-6 py-2 text-white font-medium uppercase rounded-md bg-blue-600 hover:bg-blue-700 active:bg-blue-900 hover:shadow-xl transition-all ease-in-out'>Send Code</button>
            <div className='my-2 font-bold before:border-t flex before:flex-1 items-center before:border-gray-300 after:flex-1 after:border-t after:border-gray-300'>
            <p className='text-center mx-3'>OR</p>
            </div>
            <OAuth />
            
          </div>
    </div>
  </section>
    )
}
