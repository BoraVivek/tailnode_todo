import './styles/App.css';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="todo_app">
      <header className="todo_header">
        <div className='header_content'>
          Tailnode Todo Assignment
        </div>
      </header>

      <main className='todo_container'>
        <section id='input_section'>
          <input type="text" className='todo_input' name='todo_input' placeholder='Enter your Todo List' />
        </section>

        <section id='todo_items'>
          <ul className='todo_items_list'>
            <TodoList />
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
