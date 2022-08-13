import React, { useState } from 'react';
import Add from './Add.jsx';
import AddComponent from './AddComponent'
import Card from './Card'

const CardList = ({text}) => {

    const [showTextArea, setShowTextArea] = useState(false);

    const hideTextArea = () => {
        setShowTextArea(!showTextArea);
    }

    const cardInfo = [
        {
            id:1,
            text:'Hello this is the first card'
        },
        {
            id:2,
            text:'This can be the second card in the list'
        },
        {
            id:3,
            text:'This marks the third in line'
        }
    ]
  return (
    <div className='p-2 bg-white row-span-1 rounded-sm relative mr-2 h-full'>
        <h1 className='font-semibold '>{text}</h1>
        {
            cardInfo.map((item) => (
                <Card key={item.id} info={item.text}/>
            ))
        }
        {
            showTextArea ? (
                <>
                <div onBlur={hideTextArea} >
                  <Add hideTextArea={hideTextArea}/>
                </div>
                </>
            ) : (
                <AddComponent list={false} hideTextArea={hideTextArea}/>
            )
        }
        
    </div>
  )
}

export default CardList