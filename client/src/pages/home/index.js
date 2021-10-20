import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Dashboard, EnhancedTable } from '../../components';
import HomeContainer from '../../containers/home';
import AddProduct from '../products/AddProduct';
import EditProduct from '../products/EditProduct';

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
          <EnhancedTable />
        </Route>
        <Route path="/products/edit/:id">
          <EditProduct />
        </Route>
      </Switch>
    </HomeContainer>
  );
}
