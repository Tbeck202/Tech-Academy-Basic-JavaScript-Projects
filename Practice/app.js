import React, { Component } from 'react';
import logo from './logo.svg';
import './app.css';

class App extends Component {
    render() {
        return (
            <button>This button has been clicked {this.props.clicks} times.</button>
        );
    }
}

export default App;