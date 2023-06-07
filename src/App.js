import ECharacter from "./Components/MovingCharacter/Character";
import TodoList from "./Components/TodoList/TodoSample";
import Todo from "./Components/TodoList/todo";
import style from "./App.css";
import Clock from "./Components/ClockComponent/Clock";

function App() {
  return (
    <div className="App">
      <div className="face">
        <ECharacter />
        <Todo />
      </div>
      <Clock />
    </div>
  );
}

export default App;
