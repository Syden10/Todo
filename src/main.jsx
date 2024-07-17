import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { TodoApp } from './TodoApp';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>
      <TodoApp />
    </React.StrictMode>
  </BrowserRouter>
);
