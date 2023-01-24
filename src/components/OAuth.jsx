import React from 'react'
import { FcGoogle } from "react-icons/fc"

export default function OAuth() {
  return (
    <button type='submit' className='w-full py-2 flex justify-center gap-3 text-white font-medium uppercase rounded-md bg-red-600 hover:bg-red-700 active:bg-red-900 hover:shadow-xl transition-all ease-in-out'><FcGoogle className='flex left-80 mt-1 items-center' /> Continue with Google</button>
  )
}
