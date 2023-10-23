import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ItemListContainer from './ItemListContainer';
import ProductList from './ProductList';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ItemListContainer} />
        <Route path="/category/electronics" component={ProductList} />
        <Route path="/category/jewelery" component={ProductList} />
      </Switch>
    </Router>
  );
};

export default Routes;

