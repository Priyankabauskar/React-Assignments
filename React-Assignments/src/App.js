import React from 'react';
import './App.css';
import Login from './login/login';
import Carousel from './carousel/index';
import Homepage from './homepage/index';


class App extends React.Component {
  
  render() {
    return (
      <div className="App">
       <Login />
      <Homepage />
      </div>
    );
  }
}
export default App;
