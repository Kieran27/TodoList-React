import './main.css'
import React, { Component } from "react";
import TodoForm from './components/todo_form.js'
import Todo from './components/Todo.js'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      baseName: '',
      editState: false,
      currentIndex: null,
      toDosArray: []
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  // handleSubmit(e) {
  //   const todos = [...this.state.toDosArray]
  //   e.preventDefault();
  //   if (!this.state.baseName) {
  //     return
  //   } else {
  //     todos.push({
  //       taskName: this.state.baseName,
  //       isDone: false
  //     })
  //     this.setState({
  //       baseName: "",
  //       toDosArray: todos
  //     })
  //     console.log(this.state.toDosArray)
  //   }
  // }

  handleSubmit(e) {
    const todos = [...this.state.toDosArray]
    e.preventDefault();
    switch(this.state.editState) {
      case true:
        todos[this.state.currentIndex].taskName = this.state.baseName
        break;
      case false:
        if (!this.state.baseName) {
          return
        } else {
          todos.push({
            taskName: this.state.baseName,
            isDone: false
          })
        }
        break;
      default:
      }
      this.setState({
        baseName: "",
        toDosArray: todos
      })
  }

  handleChange(e) {
    this.setState({
      baseName: e.target.value
    })
  }

  deleteTodo(index) {
    console.log(index)
    const todoArr = [...this.state.toDosArray]
    todoArr.splice(index, 1)
    this.setState({
      toDosArray: todoArr
    })
    // Splice State array with index
  }

  completeTodo(index) {
    // Change isDoneStatus of task to true
    const todos = [...this.state.toDosArray]
    if (todos[index].isDone) {
      todos[index].isDone = false
    } else {
      todos[index].isDone = true
    }
    this.setState({
      toDosArray: todos
    })
  }

  editTodo(index) {
    const todos = [...this.state.toDosArray]
    console.log(index)
    console.log(todos[index].taskName)
    this.setState({
      baseName: todos[index].taskName,
      editState: true,
      currentIndex: index
    })
  }

  editSubmit(index) {

  }

  render() {
    return (
      <div className='wrapper'>
        <header className='header'>
          <h1>To Do List</h1>
        </header>
        <TodoForm taskName={this.state.baseName} handleChange={this.handleChange} handleSubmit={this.handleSubmit} editStatus={this.state.editState} />
        <ul>
          {this.state.toDosArray.map((todo, index) => {
            return <Todo
              todo={todo}
              index={index}
              deleteTodo={this.deleteTodo.bind(this)}
              completeTodo={this.completeTodo.bind(this)}
              editTodo={this.editTodo.bind(this)}
              />
          })}
        </ul>

      </div>
    )
  }
}



export default App;
