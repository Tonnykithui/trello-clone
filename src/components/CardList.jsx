import React, { useState } from 'react';
import Add from './Add.jsx';
import AddComponent from './AddComponent';
import Card from './Card';
import { useSelector } from 'react-redux';

const CardList = ({text}) => {

    const [showTextArea, setShowTextArea] = useState(false);
    const cards = useSelector(state => state.getCard.data);
    const cardsToList = cards.filter((item) => item.text === text);

    const hideTextArea = () => {
        setShowTextArea(!showTextArea);
    }

  return (
    <div className='p-2 bg-white rounded-sm relative mr-2 h-full min-w-full'>
        <h1 className='font-semibold '>{text}</h1>
        {
            cardsToList.map((item) => (
                <Card key={item.id} info={item.textArea} id={item.id}/>
            ))
        }
        {
            showTextArea ? (
                <>
                <div>
                  <Add hideTextArea={hideTextArea} card={true} text={text}/>
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