import React from 'react'
import './App.css'
import va from "./assets/AIassis.png"
import { CiMicrophoneOn } from "react-icons/ci";
import { datacontext } from './context/UserContext';
import { useContext } from 'react';

function App() {
  let { recognition, speaking, setSpeaking, prompt, setPrompt, response, setResponse} = useContext(datacontext);
  return (
    <>
      <div className="main">
        <img src={va} alt="" id='shifra' />
        <span>Virtual Girl - <span> Talk Me <span /> </span></span>

        {!speaking ?
          <button onClick={() => {
            setPrompt("Listening...")
            setSpeaking(true)
            setResponse(false)
            recognition.start()
          }}> Click Here<CiMicrophoneOn /></button>
          :
          <div className='response'>
            {!response ?
              <p>{prompt}</p>
              :
              <p>{prompt}</p>
            }

          </div>
        }

      </div>
    </>
  )
}

export default App
