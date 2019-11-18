import  React  from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from '../login/login';
import Homepage from '../../container/homepage';
import Productlist from '../../container/productlistingpage';
import Searchproductlist from '../../container/searchpage';


const Main = () => (
    <main>
      <Switch>
        <Route exact path='/login' component={Login}/>
        <Route path='/homepage' component={Homepage}/>
        <Route path='/productlist' component={Productlist}/>
        <Route path='/searchproductlist' component={Searchproductlist}/>


      </Switch>
    </main>
  );
  
  export default Main;
  