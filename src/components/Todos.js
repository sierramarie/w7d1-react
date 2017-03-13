import React from 'react';
import Todo from './Todo';

class Todos extends React.Component { 
    render () {
        return <ul className="list-group">
            <Todo description="Walk the dog"/>
            <Todo description="Finish laundry"/>
            <Todo description="Go to the gym"/>
            <Todo description="Sweep the floor"/>
            <Todo description="Make your bed"/>
            </ul>
    }
}

export default Todos;