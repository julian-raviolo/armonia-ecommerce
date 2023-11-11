import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ItemListContainer from './ItemListContainer';
import ItemDetail from './ItemDetail';
import ElectronicsCategoryPage from '../pages/ElectronicsCategoryPage'; 
import JewelryCategoryPage from './JewelryCategoryPage'; 
import Cart from './Cart';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ItemListContainer} />
        <Route path="/category/electronics" component={ElectronicsCategoryPage} />
        <Route path="/category/jewelery" component={JewelryCategoryPage} />
        <Route path="/product/:productId" component={ItemDetail} />
        <Route path="/cart" element={<Cart />} />
      </Switch>
    </Router>
  );
};

export default Routes;



