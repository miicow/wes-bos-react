import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import StorePicker from './StorePicker';
import App from './App';
import NotFound from './NotFound';

const Router = () => (
  <BrowserRouter>
    {/* Switch tries Routes set, in order - then it eventually goes to not found */}
    <Switch>
      <Route exact path="/" component={StorePicker} />
      {/* Catch all Route to any store name */}
      <Route exact path="/store/:storeId" component={App} />
      {/* Last route for everything else, omit the path prop */}
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;
