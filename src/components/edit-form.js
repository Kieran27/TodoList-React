import '../main.css'
import React, { Component } from "react";

class EditTodo extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='todo-edit-container'>
        <form>
          <input type="text" value={this.props.name}/>
          <input type="submit" value="Edit" onSubmit={() => 'nimious'}/>
        </form>
      </div>
    )
  }
}



export default EditTodo;
