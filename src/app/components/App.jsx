import React  from 'react';
import Header from './Header.jsx';
import '../style.css';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            header: 'This is a Header Title',
        };
    }

    render() {
        return (
            <div style={contentWrapper}>
                <Header title={this.state.header} style={headerStyle}/>
            </div>
        );
    }
}

// styling
const contentWrapper = {
    height: '60px',
    backgroundColor: 'rgba(0, 0, 0, 0.2)'
}

const headerStyle = {
    fontSize: '50px'
}