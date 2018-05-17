import React, { Component } from "react";

class AddTodo extends Component {
  render() {
    return (
      <form>
        <input type="text" placeholder="todo.." />
        <button type="submit">Add Todo</button>
      </form>
    );
  }
}

export default AddTodo;
