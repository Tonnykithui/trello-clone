import AddComponent from "./components/AddComponent";
import CardList from "./components/CardList";
import React, { useState, useEffect } from 'react';
import ReactTextareaAutosize from "react-textarea-autosize";
import Add from "./components/Add";
import { useSelector, useDispatch } from 'react-redux'
import { getCardListThunk } from "./redux/cardlist";

function App() {

  const [showTextArea, setShowTextArea] = useState(false);

  const hideTextArea = () => {
      setShowTextArea(!showTextArea);
  }

  const cardsList = useSelector(state => state.getCardList.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCardListThunk())
  }, [])
  
  return (
    <div className="app overflow-x-scroll">
      <div className="flex flex-row w-80">
        {
          cardsList.map((list) => (
            <CardList key={list.id} id={list.id} text={list.textArea} />
          ))
        }
        {
            showTextArea ? (
                <>
                <div>
                <Add hideTextArea={hideTextArea} cardList={true}/>
                </div>
                </>
            ) : (
                <>
                <div className="row-span-1 w-96 bg-white h-full">
                <AddComponent list={true} hideTextArea={hideTextArea}/>
                </div>
                </>
            )
        }
      </div>
    </div>
  );
}

export default App;
