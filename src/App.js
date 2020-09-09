import React, { Component } from 'react';

import './App.css';
import axios from 'axios';

class App extends Component {
  state = {
    advice: '',
  };

  componentDidMount() {
    this.fetchAPI();
  }

  fetchAPI = () => {
    axios
      .get('https://api.adviceslip.com/advice')
      .then((response) => {
        const { advice } = response.data.slip;
        this.setState({ advice });
      })
      .then((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <div className='app'>
        <div className='card'>
          <h1 className='heading'>{this.state.advice}</h1>
          <button className='button' onClick={this.fetchAPI}>
            <span>NEW ADVICE</span>
          </button>
        </div>
      </div>
    );
  }
}

export default App;
