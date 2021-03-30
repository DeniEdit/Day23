import React, { Component } from 'react';
import Table from './Table';
import Form from './Form';


class App extends Component {
    state = {
        characters: [
            <Form handleSubmit={this.handleSubmit} />
        ],
    }
    handleSubmit = (character) => {
        this.setState({characters: [...this.state.characters, character]})
    }
}

export default App;