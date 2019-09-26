import React from 'react';
import moment from 'moment';
import _ from 'lodash';

import Todo from './Todo/Todo';
import './App.sass';

class App extends React.Component {

  state = {
    currentTodo: App.newTodo(),
    isEditing: false,
    todos: []
  }

  componentDidMount() {
    const storedTodos = window.localStorage.getItem('@Outscale::Todos');
    if(storedTodos) {
      const todosObject = JSON.parse(storedTodos);
      const todos = todosObject.map(todo => App.newTodo(todo.title, todo.achieved, todo.createdAt))
      this.setState({todos});
    }
  }

  storeTodos() {
    window.localStorage.setItem('@Outscale::Todos', JSON.stringify(this.state.todos));
  }

  static newTodo(title = '', achieved = false, date = null) {
    return {
      title,
      achieved,
      createdAt: date ? moment(date) : moment()
    }
  }

  addTodo(todo) {
    const todos = this.state.todos;
    if(this.state.isEditing) {
      const index = _.findIndex(todos, {title: todo.title});
      todos.splice(index, 1, todo);
    } else {
      todos.push(this.state.currentTodo);
    }

    this.setState({todos, currentTodo: App.newTodo(), isEditing: false}, _ => this.storeTodos());
      
  }

  markAsComplete(todo) {
    const todos = this.state.todos;
    const index = _.findIndex(todos, {title: todo.title});
    todos[index].achieved = !todos[index].achieved;
    this.setState({todos}, _ => this.storeTodos());
  }

  editTodo(todo) {
    this.setState({currentTodo: todo, isEditing: true}, _ => this.storeTodos())
  }

  deleteTodo(todo) {
    const todos = this.state.todos;
    _.remove(todos, {title: todo.title});
    this.setState({todos}, _ => this.storeTodos());

  }

  render () {
    return(
      <div className="App">
        <div className={"TodoInput"}>
          <input 
            type={'text'} 
            value={this.state.currentTodo.title}
            onChange={e => {
              const currentTodo = this.state.currentTodo;
              currentTodo.title = e.target.value;
              this.setState({currentTodo});
            }}
          /> 
          <button
            onClick={_ => this.addTodo(this.state.currentTodo)}
          >{this.state.isEditing ? `🖋 Editer ` : `📃 Ajouter`}</button>
        </div>
        <hr/>

        {this.state.todos.map(
          todo => <Todo 
            todo={todo}
            onEdit={(todo) => this.editTodo(todo)}
            onCheck={(todo) => this.markAsComplete(todo)}
            onDelete={(todo) => this.deleteTodo(todo)}
          />)}


      </div>
    )
  }

}

export default App;
