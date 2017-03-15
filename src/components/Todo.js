import React from 'react'

class Todo extends React.Component {

 

    render() {
        return <div>
        <li className="list-group-item">
            <div className="row">
                <div className="col-xs-6">
                    <div className="checkbox">
                        <label>
                            <input type="checkbox" onChange={(e) => this.props.toggleTodoComplete(this.props.id, e.target.checked)} checked={this.props.completed === 'yes' ? true : false} />
                            <span className={this.props.completed === 'yes' ? 'done' : ''}>{this.props.description}
                            </span>
                        </label>
                    </div>
                </div>
                <div className="col-xs-6">
                    <div className="checkbox text-right">
                        <div className="label label-default">{this.props.category}</div>
                    </div>
                </div>
            </div>
        </li>
    </div>
    }
}

export default Todo