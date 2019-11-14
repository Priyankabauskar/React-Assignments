import React from 'react';
import './App.scss';
import Login from './component/login/login';
import Homepage from './container/homepage/index';
import Header from './component/header/header';
import Main from './component/main/main';

class App extends React.Component {


  render() {
    return (
      <div className="App">
         < Header/>
         <Main />
      </div>
    );
  }
}
export default App;
