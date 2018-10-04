import React from 'react';
import ReactDOM from 'react-dom';

import AppRouter from './Router'

import './styles/index.scss';
import './assets/fonts/Luckiest_Guy/LuckiestGuy-Regular.ttf';
import './assets/fonts/Roboto/Roboto-Regular.ttf';
import './assets/fonts/Roboto/Roboto-Bold.ttf';
import './assets/images/18plus.svg';
import './assets/images/favorites.svg';

const rootElement = document.getElementById('root');

ReactDOM.render(<AppRouter />, rootElement);
