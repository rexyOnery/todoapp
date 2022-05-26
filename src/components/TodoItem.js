import React, { Component } from 'react'

export class TodoItem extends Component {
  render() {
      
    const completedStyles ={
        fontStyle: 'italic',
        color: '#c5e2d2',
        textDecoration: 'line-through'
    };

    const { completed, id, title } = this.props.todo;

    return (
      <div>
          <li className="todo-item">
              <input type="checkbox" checked={completed} 
                onChange={()=> this.props.handleChange(id)} />
                <button className="btn-style" onClick={()=> this.props.deleteTodo(id)}> X </button>
                <span style={completed ? completedStyles : null}>
                    {title}
                </span>
            </li>
      </div>
    )
  }
}

export default TodoItem