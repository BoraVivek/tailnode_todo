import Moment from 'react-moment';


function TodoList({ todo, markComplete }) {
    return (
        <li className={`todo_item ${todo.completed_at != null ? "completed_task" : ''}`}  onClick={() => markComplete(todo.todo_id)}>
            <div className='todo_title'>
                {todo.title}
            </div>
            {todo.completed_at &&
                <div className='due_date'>
                     <img alt='created_at' src='./icons/completed.svg' />Completed:
                    <Moment fromNow>{todo.completed_at}</Moment>
                </div>
            }

            <div className='created_at'>
                <img alt='created_at' src='./icons/created_at.svg' />Created: 
                <Moment fromNow>{todo.created_at}</Moment>
            </div>
        </li>
    );
}

export default TodoList;