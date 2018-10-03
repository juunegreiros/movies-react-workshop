import React from 'react';
import ReactDOM from 'react-dom';

import Movies from './containers/Movies'

import './styles/index.scss';
import './assets/fonts/Luckiest_Guy/LuckiestGuy-Regular.ttf';
import './assets/fonts/Roboto/Roboto-Regular.ttf';
import './assets/fonts/Roboto/Roboto-Bold.ttf';
import './assets/images/18plus.svg';
import './assets/images/favorites.svg';

const App = () => {
  return (
    <Movies></Movies>
  )
}

export default App;

const rootElement = document.getElementById('root');

ReactDOM.render(<App />, rootElement);
