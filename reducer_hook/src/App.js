import Counter from "./counter/counter";
import Todo from './todo/todo'

function App() {

  return (
    <div className="App">
        <header className="App-header">
       < Counter key={1} />
        <Todo key={2} />
    </header>
   </div>
   
  );
}

export default App;
