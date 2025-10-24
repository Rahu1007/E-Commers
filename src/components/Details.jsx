import React from 'react'
import { Link } from 'react-router-dom'

const Details = () => {
  return (
    <div className="w-[80%] h-full p-10 pt-[5%] flex flex-col gap-5 bg-red-100 overflow-y-scroll  m-auto p-[10%]" >
        <img
         src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png" alt="" />
    <div className='content'>
    <h1 >Title</h1>
    <h2>Price</h2>
    <p>Description</p>
    <Link to="#" className="border rounded border-blue-500 text-blue-800 px-5 py-2">Edit</Link>
    <Link to="#" className="border rounded border-red-500 text-red-800 px-5 py-2">Delete</Link>

    </div>
    </div>
  )
}

export default Details