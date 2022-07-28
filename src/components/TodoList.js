import Moment from 'react-moment';


function TodoList({ todo, markComplete }) {
    return (
        <li className='todo_item' onClick={() => markComplete(todo.todo_id)}>
            <div className='todo_title'>
                {todo.title}
            </div>
            {/* <div className='todo_category'>
                Category
              </div> */}
            {todo.completed_at &&
                <div className='due_date'>
                    <img alt='created_at' src='./icons/completed.svg' />
                    <Moment fromNow>{todo.completed_at}</Moment>
                </div>
            }

            <div className='created_at'>
                <img alt='created_at' src='./icons/created_at.svg' />
                <Moment fromNow>{todo.created_at}</Moment>
            </div>
        </li>
    );
}

export default TodoList;