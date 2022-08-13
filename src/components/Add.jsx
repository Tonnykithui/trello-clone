import React, { useState } from 'react'
import ReactTextareaAutosize from 'react-textarea-autosize';

const Add = ({ hideTextArea }) => {

    const [textArea, setTextArea] = useState('');
    const submitHeader = e => {
        e.preventDefault();

    }

  return (
    <div className='bg-white p-2 w-96'>
        <ReactTextareaAutosize className='w-full h-10 bg-slate-300 p-2 outline-none' 
        placeholder='Card details' value={textArea} onChange={(e) => setTextArea(e.target.value)}
        />
        <div className='grid grid-cols-2 gap-2'>
            <button className='button bg-blue-400 text-white' onClick={submitHeader}>Add Details</button>
            <button className='button bg-red-400 text-white' onClick={hideTextArea}>Cancel</button>
        </div>
    </div>
  )
}

export default Add