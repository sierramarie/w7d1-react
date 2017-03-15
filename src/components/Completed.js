import React from 'react'

import { browserHistory } from 'react-router'
import { connect } from 'react-redux'


class Completed extends React.Component {

    render() {
        return <div>
        <h1>Completed Todos</h1>
        <span className="input-group-btn">
            <button className="btn btn-default" type="button" onClick={() => browserHistory.push('/')}>View All Todos</button>
         </span>
         </div>
    }
}

// Map shared Redux state to props
const mapStateToProps = (redux) => {
    return {
        sharedCompleted: redux.state.todos
    }
}

// Export the component, connected to Redux, for other components to import
export default connect(mapStateToProps)(Completed)

