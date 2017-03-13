import React from 'react';
import Todos from './Todos';
// import Todo from './Todo';
// import AddTodo from './AddTodo';


class App extends React.Component {
    render () {

        // let Images = []

        // for (let i = 0; i < 50; i++) {
        //     Images.push(<Image number={i}/>);
        // }

        return <div className="container">
            <div className="row">
                <div className="col-sm-6 col-sm-offset-3">
                    <Todos/>
                </div>
            </div>
        </div>
    }
}

export default App;



// first line has to be on the same return line. you can use parenthesis for organizatio
// every tag must be self closing or have a closing tag