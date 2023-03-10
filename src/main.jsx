import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

import { a } from './fake-monorepo-stub';

console.log(a);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
