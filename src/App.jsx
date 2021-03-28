import React, { Component } from 'react';
import './App.css'

import TodoList from './Components/TodoList';
import AddTodo from './Components/AddTodo';

class App extends Component {
  state = {
    Todos: [
      { id: 1, sub: 'buy milk' },
      { id: 2, sub: 'excelent' }
    ]
  }

  deleteTodo = (id) => {
    const newTodoList = this.state.Todos.filter(todo => {
      return todo.id !== id
    })
    this.setState({
      Todos: newTodoList
    })

  }
  addTodo = (todo) => {
    todo.id = Math.random()
    const new_todo = [...this.state.Todos, todo];
    this.setState({
      Todos: new_todo
    })
  }
  render() {
    return (
      <div className='Container'>
        <div className="row box-head" >
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
            <h1>Todo App</h1>
          </div>
        </div>
        <div className="row box-container">
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 box-sec1">
            <TodoList
              todos={this.state.Todos}
              deleteTodo={this.deleteTodo}
            />
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 box-sec2">
            <AddTodo
              addTodo={this.addTodo} />
          </div>
        </div>

      </div>
    );
  }
}

export default App;