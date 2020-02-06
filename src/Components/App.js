import React, { Component } from 'react';
import Container from './Container';

class App extends Component {
  
  render() {
    return (
      <div className="ui three column divided stackable grid" >
      <div className="row">
        <Container lable="past"/>
       
        </div>
       
      </div>
    );
  }
}

export default App;
