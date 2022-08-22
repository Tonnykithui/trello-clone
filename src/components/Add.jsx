import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import ReactTextareaAutosize from 'react-textarea-autosize';
import { addCardThunk } from '../redux/card';
import { addCardListThunk } from '../redux/cardlist';

const Add = ({ hideTextArea, cardList, textId }) => {

    const [textArea, setTextArea] = useState('');
    const dispatch = useDispatch();

    const submitHeader = e => {
        e.preventDefault();
        const title = {
          textArea
        }

        const cardInfo = {
          textId,
          textArea
        }
        cardList ? dispatch(addCardListThunk(title)) : dispatch(addCardThunk(cardInfo));
        setTextArea('');
    }

  return (
    <div className='bg-white p-2 w-72'>
        <ReactTextareaAutosize className='w-full h-10 bg-slate-300 p-2 outline-none' 
        placeholder='Card details' value={textArea} onChange={(e) => setTextArea(e.target.value)}
        />
        <div className='grid grid-cols-2 gap-2'>
            <button className='button bg-blue-400 text-white' onClick={submitHeader}>Add Details</button>
            <button className='button bg-red-400 text-white' onClick={() => hideTextArea()}>Cancel</button>
        </div>
    </div>
  )
}

export default Add