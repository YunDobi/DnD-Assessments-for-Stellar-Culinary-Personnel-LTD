import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// I had to delete the StrickMode from React. beautifle dnd is not support After React 18
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);
