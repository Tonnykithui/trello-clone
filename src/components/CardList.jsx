import React, { useState, useEffect } from 'react';
import Add from './Add.jsx';
import AddComponent from './AddComponent';
import Card from './Card';
import { useSelector, useDispatch } from 'react-redux';
import { addCardThunk, deleteCardThunk, getCardThunk, updateCardThunk } from '../redux/card/index.js';

const CardList = ({textId}) => {

    const [showTextArea, setShowTextArea] = useState(false);
    const cards = useSelector(state => state.getCard.data);
    const cardsToList = cards.filter((item) => item.text === textId);
    const dispatch = useDispatch();

    const hideTextArea = () => {
        setShowTextArea(!showTextArea);
    }

    // const dropCard = (e, dispatch) => {
    //     let itemId = localStorage.getItem('draggedId');
    //     console.log('Drop card', typeof itemId);
    //     let card = cards.filter(card => card.id == itemId);
    //     console.log(card);
    //     console.log(textId);
    //     const { id,text, textArea } = card[0];
    //     console.log(id)
    //     if(text != textId){
    //         let newCard = {
    //             text:textId,
    //             textArea:textArea
    //         }
    //         card.text = e.target.parentElement.id;
    //         dispatch(deleteCardThunk(id))
    //         dispatch(addCardThunk(newCard))
    //         // Promise.resolve(dispatch(addCardThunk(newCard))).then(() => dispatch(deleteCardThunk(id)))
            
    //         // cardsToList.push(...card);
    //         console.log(cardsToList);
    //         console.log(e);
    //         console.log(typeof e.target.parentElement.id);
    //     }
    // }

    function onDrop(ev, textId){
        ev.preventDefault();
        let item = ev.dataTransfer.getData("text");
        const cardDetails = cards.filter(card => card.id == item);
        let newItem = {
            id:cardDetails[0].id,
            textArea:cardDetails[0].textArea,
            text:textId
        }
        dispatch(updateCardThunk(newItem.id, newItem))
    }

  return (
    <div className='p-2 bg-white rounded-sm relative mr-2 h-full min-w-full' id={textId}
    onDrop={e => onDrop(e, textId)} onDragOver={(e) => e.preventDefault()}
    >
        <h1 className='font-semibold '>{textId}</h1>
        {
            cardsToList.map((item, index) => (
                <Card key={item.id} info={item} index={index} />
            ))
        }
        {
            showTextArea ? (
                <>
                <div>
                  <Add hideTextArea={hideTextArea} card={true} text={textId}/>
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