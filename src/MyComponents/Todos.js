import React from 'react'
import Todoitem from './Todoitem'

const Todos = (props) => {
    return (
        <div className='container-sm my-3 '>
            <h3 className='text-center my-3'>Todo List</h3>
            {props.todos.length===0 ? "No Todos to display": ""}
          {props.todos.map((todo)=>{
            return <Todoitem todo= {todo} key={todo.sno} onDelete={props.onDelete} />
          })}
          <hr />
        </div>
      )
}

export default Todos ;