function TodoList({todoList}){
    return(
        <li className='todo_item'>
              <div className='todo_title'>
                Testing Todo List
              </div>
              <div className='todo_category'>
                Category
              </div>
              <div className='due_date'>
                <img alt='created_at' src='./icons/due_date.svg' />
                Due Date
              </div>
              <div className='created_at'>
                <img alt='created_at' src='./icons/created_at.svg' />
                Time Created at
              </div>
            </li>
    );
}

export default TodoList;