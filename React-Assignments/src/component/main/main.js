import  React  from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from '../login/login';
import Homepage from '../../container/homepage';

const Main = () => (
    <main>
      <Switch>
        <Route exact path='/login' component={Login}/>
        <Route path='/homepage' component={Homepage}/>
      </Switch>
    </main>
  );
  
  export default Main;
  