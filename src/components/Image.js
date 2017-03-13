import React from 'react';

class Image extends React.Component {
    render () { 
            return <img src={'https://robohash.org/react' + this.props.number + '?bgset=bg1'}/>
    }
}

export default Image;
