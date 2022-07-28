import './styles/App.css';
import TodoList from './components/TodoList';
import { useEffect, useState } from 'react';

function App() {

  const [todoInput, setTodoInput] = useState("");


  const [todos, setTodos] = useState([]);

  function handleMarkComplete(todoId){
    let newTodos = todos.map((todo) => {
      if(todo.todo_id === todoId){
        return {...todo, completed_at: Date.now()};
      }
      return todo;
    });

    setTodos(newTodos);
  }

  
  //Get todos Stored in LocalStorage, and set them in state
  useEffect(() => {
    let storedTodos = JSON.parse(localStorage.getItem("todos"));
    
    if(storedTodos.length > 0){
      setTodos(storedTodos);
    }
  }, []);

  //Update todos in Localstorage, if todos in state updates
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);


  function handleTodoSubmit(e) {
    if (e.key === 'Enter') {
      let title = todoInput;
      let createdAt = Date.now();

      setTodos([...todos, {
        todo_id: todos.length,
        title: title,
        created_at: createdAt,
        completed_at: null
      }]);
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
          <input type="text" className='todo_input' name='todo_input' placeholder='Enter your Todo List' onChange={(e) => setTodoInput(e.target.value)} onKeyUp={handleTodoSubmit} />
        </section>

        <section id='todo_items'>
          <ul className='todo_items_list'>
            {todos.map((todo) => <TodoList key={todo.todo_id} todo={todo} markComplete={handleMarkComplete} />)}
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
