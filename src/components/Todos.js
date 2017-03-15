import React from 'react'
import Layout from './Layout'
import AddTodo from './AddTodo'
import Todo from './Todo'

import { connect } from 'react-redux'
import { browserHistory } from 'react-router'


class Todos extends React.Component {
    constructor(props) {
        super(props)
        this.getTodos = this.getTodos.bind(this)
        this.addTodo = this.addTodo.bind(this)
        this.toggleTodoComplete = this.toggleTodoComplete.bind(this)


        // this.state = {
        //     todos: []
        // }
    }

    componentWillMount() {
        this.getTodos()
    }

    getTodos() {
        fetch('/api/v1/todos')
        .then(response => response.json())
        .then(todos => this.props.dispatch({type: 'TODOS_UPDATE', body: todos}))
    }

    addTodo(todo) {
        this.getTodos()
        // let newTodos = this.state.todos
        // newTodos.unshift(todo)
        // this.setState({todos: newTodos})
    }
    toggleTodoComplete(todoId, isCompleted) {

        if (isCompleted) {
            fetch(`/api/v1/todos/${todoId}/complete`)
            .then (this.getTodos)
        }

        else {
            fetch(`/api/v1/todos/${todoId}/incomplete`)
            .then (this.getTodos)
        }
    }

    render() {
        let todos = this.props.sharedTodos.map((todo, key) => <Todo key={key} description={todo.todo} category={todo.category} id={todo.id} completed={todo.completed} toggleTodoComplete={this.toggleTodoComplete} />)


        if (todos.length ===0) {
            todos = <div className="alert alert-success text-center">Please start by adding a todo above.</div>
        }

        return <div> 
         <Layout>
            <AddTodo getTodos={this.getTodos} />
            <ul className="list-group">
                {todos}
            </ul>
        </Layout>
        <span className="input-group-btn">
        <button className="btn btn-default" type="button" onClick={() => browserHistory.push('/completed')}>View Completed Todos</button>
        </span>
        </div>
    }
}

// Map shared Redux state to props
const mapStateToProps = (redux) => {
    return {
        sharedTodos: redux.state.todos
    }
}

// Export the component, connected to Redux, for other components to import
export default connect(mapStateToProps)(Todos)


