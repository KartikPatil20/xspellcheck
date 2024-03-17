import React, {useState} from 'react';
import './App.css';

const customDictionary = {

  teh: "the",

  wrok: "work",

  fot: "for",

  exampl: "example"

};


function App() {

  const [inputText, setInputText] = useState("");
  const [correction, setCorrection] = useState(null);

  const HandleInput = (text) => {
    setInputText(text);
    Checkspell(text);
  }


  const Checkspell = (text) => {
    for(const[incorrectWord, correctWord] of Object.entries(customDictionary)){
    
      if(text.toLowerCase().match(incorrectWord)){
        setCorrection(`${correctWord}?`);
        return;
      }
    }
    setCorrection(null);
  }

  return (
    <div className="App">
      <h1>Spell Check and Auto-Correction</h1>
      <textarea placeholder='Enter text...' value={inputText} onChange={(e)=>HandleInput(e.target.value)} />
      { correction && <p>Did you mean: <span className='correct_word'>{correction}</span></p>}
    </div>
  );
}

export default App;
