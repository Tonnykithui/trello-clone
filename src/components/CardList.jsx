import React, { useState, useRef } from 'react';
import Add from './Add.jsx';
import AddComponent from './AddComponent';
import Card from './Card';
import { useSelector, useDispatch } from 'react-redux';
import { addCardThunk } from '../redux/card/index.js';

const CardList = ({textId}) => {

    const [showTextArea, setShowTextArea] = useState(false);
    const cards = useSelector(state => state.getCard.data);
    const cardsToList = cards.filter((item) => item.text === textId);
    const dispatch = useDispatch();

    const hideTextArea = () => {
        setShowTextArea(!showTextArea);
    }

    const dropCard = (e) => {
        let itemId = localStorage.getItem('draggedId');
        console.log('Drop card', typeof itemId);
        let card = cards.filter(card => card.id == itemId);
        console.log(card);
        console.log(textId);
        const { text, textArea } = card[0];

        if(text != textId){
            let newCard = {
                text:textId,
                textArea:textArea
            }
            card.text = e.target.parentElement.id;
            dispatch(addCardThunk(newCard));
            cardsToList.push(...card);
            console.log(cardsToList);
            console.log(e);
            console.log(typeof e.target.parentElement.id);
        }
    }

  return (
    <div className='p-2 bg-white rounded-sm relative mr-2 h-full min-w-full' id={textId}
    onDrop={dropCard} onDragOver={(e) => e.preventDefault()}
    >
        <h1 className='font-semibold '>{textId}</h1>
        {
            cardsToList.map((item, index) => (
                <Card key={item.id} info={item.textArea} index={index} id={item.id}/>
            ))
        }
        {
            showTextArea ? (
                <>
                <div>
                  <Add hideTextArea={hideTextArea} card={true} textId={textId}/>
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