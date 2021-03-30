import React, { Component } from 'react';
import Table from './Table';
import Form from './Form';


class App extends Component {
    state = {
        characters: [],
    }
    handleSubmit = (character) => {
        this.setState({characters: [...this.state.characters, character]})
    }
}

export default App;
