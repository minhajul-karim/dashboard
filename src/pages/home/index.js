import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Dashboard } from '../../components';
import HomeContainer from '../../containers/home';
import AddProduct from '../products/AddProduct';

export default function Home() {
  return (
    <HomeContainer>
      <Switch>
        <Route exact path="/">
          <Dashboard />
        </Route>
        <Route path="/products/create">
          <AddProduct />
        </Route>
        <Route path="/products/all">
          <h1>Table of all products</h1>
        </Route>
      </Switch>
    </HomeContainer>
  );
}
