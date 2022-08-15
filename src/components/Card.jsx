import React from 'react'
import { FaEdit } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";

const Card = ({info}) => {

  return (
    <div className='bg-slate-300 p-2 rounded-md mb-2 flex flex-row relative'>
      <div>
        <h3>{info}</h3>
      </div>
      <div className='flex flex-row absolute right-0 top-1'>
        <FaEdit className='text-blue-700 cursor-pointer hover:scale-105'/>
        <AiOutlineDelete className='text-red-500 cursor-pointer hover:scale-105'/>
      </div>
    </div>
  )
}

export default Card