// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { NotesProvider } from './context/NotesContext';

ReactDOM.render(
  <React.StrictMode>
    <NotesProvider>
      <App />
    </NotesProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
