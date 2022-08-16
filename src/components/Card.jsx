import React from 'react'
import { FaEdit } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";
import { useDispatch } from 'react-redux';
import { deleteCardThunk } from '../redux/card';

const Card = ({info, id}) => {

  const dispatch = useDispatch();

  return (
    <div className='bg-slate-300 p-2 rounded-md mb-2 flex flex-row relative'>
      <div>
        <h3>{info}</h3>
      </div>
      <div className='flex flex-col absolute right-1 top-1'>
        <FaEdit className='text-blue-700 cursor-pointer hover:scale-105'/>
        <AiOutlineDelete className='text-red-500 cursor-pointer hover:scale-105'
        onClick={() => dispatch(deleteCardThunk(id))}
        />
      </div>
    </div>
  )
}

export default Card