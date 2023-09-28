import { useState } from "react";
import "./app.css";
import { useDispatch, useSelector } from "react-redux";
import { AddTODO, DeleteTODO } from "./actions/Addtodo"; // Assuming you've defined addTODO action creator

function App() {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();
  const Todo = useSelector((state) => state.Todo); // Correct state variable name
  const { todos } = Todo;
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(AddTODO(todo));
  };
  const Removehandle = (t) => {
    dispatch(DeleteTODO(t));
  };

  return (
    <div className="App">
      <header>
        <h1 className="listhead">TO DO LIST</h1>
        <form onSubmit={handleSubmit} className="form">
          <input
            onChange={(e) => setTodo(e.target.value)}
            value={todo}
            className="text-center"
            placeholder="Enter a To Do"
          />
          <button className="button1" type="submit">
            Go
          </button>
        </form>
        <ul>
          {todos &&
            todos.map((t) => (
              <li key={t.id} className="m-2">
                <span>{t.todo}</span>
                <button className="button2" onClick={() => Removehandle(t)}>
                  Delete
                </button>
              </li>
            ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
