import { useState } from 'react'
import './App.css'
import { func } from 'prop-types'

function App() {

  const [input , handleInput] = useState("")

  async function query(data) {
    const response = await fetch(
      "https://api-inference.huggingface.co/models/cardiffnlp/twitter-roberta-base-sentiment-latest",
      {
        headers: { Authorization: "Bearer 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" },
        method: "POST",
        body: JSON.stringify(data),
      }
    );
    const result = await response.json();
    return result;
  }

  function callBack(){
    query({"inputs": "I like you. I love you"}).then((response) => {
     console.log(JSON.stringify(response));
   })
 }
  

  return (
    <>
  <h1>Senntence Emotion Predictor</h1>
  <input type="text" name="" id="" />
  <button onClick={callBack}>Run </button>
    </>
  )
}

export default App


//commertn