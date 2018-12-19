import React, { Component } from 'react';
import './App.css';
import ConnectedMovieContainer from './Components/MoviesContainer'
import 'bootstrap/dist/css/bootstrap.css'



class App extends Component {
  render() {
    return (
      <div className="App">
      <ConnectedMovieContainer/>
      </div>
    );
  }
}

export default App