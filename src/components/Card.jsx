import React, { useRef } from 'react'
import { FaEdit } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";
import { useDispatch } from 'react-redux';
import { deleteCardThunk } from '../redux/card';

const Card = ({info, index}) => {

  const dispatch = useDispatch();
  
  const dragItem = useRef();
  let dragged = null;

  function dragStart(e, info){
    console.log('Drag start :', info);
    e.dataTransfer.setData("text/plain", info.id);
  }

  return (
    <div className='bg-slate-300 p-2 rounded-md mb-2 flex flex-row relative' draggable={true}
    onDragStart={(e) => dragStart(e, info)}
    >
      <div>
        <h3>{info.textArea}</h3>
      </div>
      <div className='flex flex-col absolute right-1 top-1'>
        <FaEdit className='text-blue-700 cursor-pointer hover:scale-105'/>
        <AiOutlineDelete className='text-red-500 cursor-pointer hover:scale-105'
        onClick={() => dispatch(deleteCardThunk(info.id))}
        />
      </div>
    </div>
  )
}

export default Card