import React from 'react';
import './App.css';
import Login from './component/login/login';
import Homepage from './container/homepage/index';



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
