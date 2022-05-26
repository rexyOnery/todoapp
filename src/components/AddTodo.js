import React, { Component } from 'react'

export class AddTodo extends Component {

    state = {
        title: ''
    };
    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({
            title:''
        });
    };

  render() {
    return (
      <form className="form-container" onSubmit={this.onSubmit}>
          <input type="text" placeholder="Add Todo..." className="input-text" 
          value={this.state.title} onChange={this.onChange} name="title"/>
          <input type="submit" className="input-submit" value="Add Todo" />
      </form>
    )
  }
}

export default AddTodo