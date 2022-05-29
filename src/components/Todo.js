import '../main.css'
import React, { Component } from "react";
import EditTodo from './edit-form.js'

class Todo extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {todo, index, deleteTodo, completeTodo, editTodo} = this.props
    return (
      <div className='todo'>
        <li key={`${index}${todo.taskName}`}>
        {
          (todo.isDone === true)
          ? <del> {todo.taskName}</del>
          : <div> {todo.taskName} </div>  }
        </li>
      <div>
        <button className='todo-btn' onClick= {() => editTodo(index)} >Edit</button>
        <button className='todo-btn' onClick={() => completeTodo(index)}>✔</button>
        <button className='todo-btn' onClick={() => deleteTodo(index)}>X</button>
      </div>
      </div>
    )
  }
}



export default Todo;
