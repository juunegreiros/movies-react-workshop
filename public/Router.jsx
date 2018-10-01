import React from 'react';
import getGenres from './services/genres/getGenres.jsx'

class Router extends React.Component {

  render() {
    getGenres('1123')
    return <h1> Hello, asds! </h1>
  }
}

export default Router;
