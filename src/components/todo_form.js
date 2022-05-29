import '../main.css'
import React, { Component } from "react";

class TodoForm extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='form-container' onSubmit={this.props.handleSubmit}>
        <form className='form'>
          <input
            value={this.props.taskName}
            className='input'
            type="text"
            placeholder='Add Todo'
            onChange={this.props.handleChange}
          />
          <input className='submit' type="submit"/>
        </form>
      </div>
    )
  }
}

export default TodoForm;
