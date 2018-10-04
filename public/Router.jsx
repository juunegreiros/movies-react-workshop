import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Movies from './containers/Movies';
import MovieDetail from './containers/MovieDetail';

const AppRouter = () => (
  <Router>
    <div>
      <Route exact path="/" component={Movies} />
      <Route path="/movie/:id" component={MovieDetail} />
    </div>
  </Router>
);

export default AppRouter;