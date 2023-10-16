import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ItemListContainer from './ItemListContainer';
import ItemDetailContainer from './ItemDetailContainer';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ItemListContainer} />
        <Route exact path="/category/:id" component={ItemListContainer} />
        <Route exact path="/item/:id" component={ItemDetailContainer} />
      </Switch>
    </Router>
  );
};

export default Routes;
