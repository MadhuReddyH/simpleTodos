// Write your code here

import './index.css'

const TodoItem = props => {
  const {todoDetails, deleteTodo} = props
  const {title, id} = todoDetails

  const onDelete = () => {
    deleteTodo(id)
  }

  return (
    <li className="todo-item">
      <p className="title"> {title}</p>
      <button className="delete-btn" type="button" onClick={onDelete}>
        {' '}
        Delete{' '}
      </button>
    </li>
  )
}

export default TodoItem
