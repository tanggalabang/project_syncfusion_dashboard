import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import Router from './router.js';
import { ContextProvider } from './contexts/ContextProvider';

ReactDOM.render(
  <React.StrictMode>
    <ContextProvider>
      <Router/>
    </ContextProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
