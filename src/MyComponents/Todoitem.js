import React from 'react'

export default function Todoitem({todo,onDelete}) {
  return (
    <div>
      <h4>{todo.title}</h4>
      <p>{todo.description}</p>
      <div className="text-center"><button type="button" className="btn btn-danger container " onClick={()=>{onDelete(todo)}}>Delete Task</button></div>
      <hr/>
    </div>
  )
}

