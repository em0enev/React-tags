import "./App.css";
import Tags from "./Tags";

const tags = ["boomdotdev", "task", "tags", "react"]

function App() {
  return (
    <div className="App">
        <Tags tags={tags}></Tags>
    </div>
  );
}

export default App;
