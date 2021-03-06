import "./App.css";
import { useState } from "react"


function App() {
  let textFromLs = localStorage.getItem("text")

  const [text, setText] = useState(textFromLs ? textFromLs : "");

  function saveToLocalStorage(text) {
    localStorage.setItem("text", text)
    console.log(localStorage.text)
  }

  function clearLocalStorage() {
    localStorage.clear();
    setText("")
  }

  return (
    <div className="App">
      <div className="box">
        <div className="field">
          <div className="control">
            <textarea
              className="textarea is-large"
              placeholder="Notes..."
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </div>
        </div>
        <button onClick={() => saveToLocalStorage(text)} className="button is-large is-primary is-active" >Save</button>
        <button onClick={() => clearLocalStorage()} className="button is-large">Clear</button>
      </div>
    </div>
  );
}

export default App;
