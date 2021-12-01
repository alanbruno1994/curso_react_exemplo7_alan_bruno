import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Storage from './data/Storage';

ReactDOM.render(
  <React.StrictMode>
    <Storage>
        <App />
    </Storage>
  </React.StrictMode>,
  document.getElementById('root')
);

