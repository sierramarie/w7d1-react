import React from 'react'

class AddTodo extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            description: '',
            category: '',
            addTodo: props.addTodo,
            toggleTodoComplete: props.toggleTodoComplete
        }
    }

    onClick() {
        if (this.state.description !== '' && this.state.category !== '') {
            fetch('/api/v1/todos', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    todo: this.state.description,
                    category: this.state.category,
                    completed: false
                })
            })
            .then(response => response.json())
            .then(todo => {
                this.setState({
                    description: '',
                    category: ''
                })

                this.state.addTodo(todo)
            })
        }
    }


    addTodo(getTodos) {
        fetch('/api/v1/todos', {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            todo: this.state.description,
            category: this.state.category,
            completed: false
        })
    })
    .then(response => response.json())
    .then(todo => {
        this.setState({
            description: '',
            category: ''
        })
        this.state.addTodo(getTodos)
    })
}   


    render() {
        return <div>
            <div className="form-group">
                <select className="form-control" value={this.state.category} onChange={(e) => this.setState({category: e.target.value})}>
                    <option value="">Select Category...</option>
                    <option value="fun">Fun</option>
                    <option value="home">Home</option>
                    <option value="school">School</option>
                    <option value="work">Work</option>
                </select>
            </div>
            <div className="form-group">
                <div className="input-group">
                    <input type="text" className="form-control" value={this.state.description} onChange={(e) => this.setState({description: e.target.value})} />
                    <span className="input-group-btn">
                        <button className="btn btn-success" type="button" onClick={() => this.onClick()}>Add Todo</button>
                    </span>
                </div>
            </div>
        </div>
    }
}

export default AddTodo

