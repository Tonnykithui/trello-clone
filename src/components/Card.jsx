import React from 'react'

const Card = ({info}) => {

  return (
    <div className='bg-slate-300 p-2 rounded-md mb-2 w-96'>
        <h3>{info}</h3>
    </div>
  )
}

export default Card