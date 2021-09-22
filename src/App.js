import "./App.css";
import { useState } from "react"


function App() {
  const [text, setText] = useState("");

  function saveToLocalStorage(text){
    localStorage.setItem("msg", text)
    console.log(localStorage.msg)
  }

  function clearLocalStorage(){
    localStorage.clear();
    setText("");
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
