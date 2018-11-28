import React from 'react';
import { render } from 'react-dom';
import './style/css/index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const id = document.getElementById('root');

render(<App />, id);

serviceWorker.register();
