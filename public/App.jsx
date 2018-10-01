import React from 'react';
import ReactDOM from 'react-dom';

import './styles/index.scss';
import './assets/fonts/Luckiest_Guy/LuckiestGuy-Regular.ttf';
import './assets/fonts/Roboto/Roboto-Regular.ttf';
import './assets/fonts/Roboto/Roboto-Bold.ttf';
import './assets/images/18plus.svg';
import './assets/images/favorites.svg';

const App = () => {
  return (
    <h1 className="main-title">Hello, World!</h1>
  )
}

export default App;

const rootElement = document.getElementById('root');

ReactDOM.render(<App />, rootElement);
