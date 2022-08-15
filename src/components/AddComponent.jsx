import React from 'react'

const AddComponent = ({list, hideTextArea}) => {
    const text = list ?  '+ Add List' : '+ Add Card';
  return (
    <div className='bg-white h-10 w-72' onClick={() => hideTextArea()}> 
        <button className='font-semibold h-10'>{text}</button>
    </div>
  )
}

export default AddComponent