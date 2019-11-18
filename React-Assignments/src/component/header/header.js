import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <nav>
      <ul>
        <li><Link to='/login'>Login</Link></li>
        <li><Link to='/homepage'>Home</Link></li>
        <li><Link to='/productlist'>Productlist</Link></li>
        <li><Link to='/Searchproductlist'>Searchproductlist</Link></li>


      </ul>
    </nav>
  </header>
);

export default Header;
