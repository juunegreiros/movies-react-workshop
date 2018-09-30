import React from 'react';
import ReactDOM from 'react-dom';

import './styles/index.scss';

class App extends React.Component {
  render() {
    return <h1> Hello, world! </h1>
  }
}

const rootElement = document.getElementById('root');

ReactDOM.render(<App />, rootElement);
