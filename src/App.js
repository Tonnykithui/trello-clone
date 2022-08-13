import AddComponent from "./components/AddComponent";
import CardList from "./components/CardList";
import React, { useState } from 'react';
import ReactTextareaAutosize from "react-textarea-autosize";
import Add from "./components/Add";

function App() {
  const [showTextArea, setShowTextArea] = useState(false);

    const hideTextArea = () => {
        setShowTextArea(!showTextArea);
    }
  return (
    <div className="app">
      <div className="flex flex-row w-screen">
        <CardList text='Hello'/>
        <CardList text='HIGH' />
        <CardList text='HIGH' />
        {
            showTextArea ? (
                <>
                <div onBlur={hideTextArea}>
                <Add hideTextArea={hideTextArea}/>
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
