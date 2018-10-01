import React from 'react';
import ReactDOM from 'react-dom';

import './styles/index.scss';

const App = () => {
  return <h1>Hello World!</h1>
}

export default App;

const rootElement = document.getElementById('root');

ReactDOM.render(<App />, rootElement);
