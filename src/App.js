import './styles/App.css';
import TodoList from './components/TodoList';
import { useEffect, useState } from 'react';

function App() {

  const [todoInput, setTodoInput] = useState("");
  const [todos, setTodos] = useState([]);

  /** Function to Reset Application */
  function resetApp() {
    setTodos([]);
  }

  /** Function which is used to Sort Todos */
  function sortTodos(todos) {
    // Sorting Todos in Descending Order
    let incompleteTasks = todos.filter((todo) => todo.completed_at == null).sort((a, b) => b.created_at - a.created_at);
    let completeTasks = todos.filter((todo) => todo.completed_at != null).sort((a, b) => b.completed_at - a.completed_at);
    setTodos([...incompleteTasks, ...completeTasks]);
  }

  /** Function to mark a todo as complete */
  function handleMarkComplete(todoId) {
    let newTodos = todos.map((todo) => {
      if (todo.todo_id === todoId && todo.completed_at == null) {
        return { ...todo, completed_at: Date.now() };
      }
      return todo;
    });

    sortTodos(newTodos);
  }


  //Get todos Stored in LocalStorage, and set them in state
  useEffect(() => {
    let storedTodos = JSON.parse(localStorage.getItem("todos"));

    console.log(storedTodos);

    if (storedTodos?.length > 0) {
      sortTodos(storedTodos);
    }
  }, []);


  //Update todos in Localstorage, if todos in state updates
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));

  }, [todos]);

  /** Create new Todo when Enter is pressed */
  function handleTodoSubmit(e) {
    if (e.key === 'Enter') {
      let title = todoInput;
      let createdAt = Date.now();

      setTodos([{
        todo_id: todos.length,
        title: title,
        created_at: createdAt,
        completed_at: null
      }, ...todos]);

      setTodoInput("");
    }
  }

  return (
    <div className="todo_app">
      <header className="todo_header">
        <div className='header_content'>
          Tailnode Todo Assignment
        </div>
      </header>

      <main className='todo_container'>
        <section id='input_section'>
          <input type="text" className='todo_input' name='todo_input' value={todoInput} placeholder='Enter your Todo List' onChange={(e) => setTodoInput(e.target.value)} onKeyUp={handleTodoSubmit} />
        </section>

        <section id='todo_items'>
          <div className='reset_button' onClick={resetApp}>
            <img src="./icons/reset.svg" alt="Reset Todos" />
            Reset Todos
          </div>
          <ul className='todo_items_list'>
            {todos.map((todo) => <TodoList key={todo.todo_id} todo={todo} markComplete={handleMarkComplete} />)}
          </ul>
        </section>

        <footer>
          Created by Vivek Bora
        </footer>
      </main>

      
    </div>
  );
}

export default App;
