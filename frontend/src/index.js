import React from 'react';
import ReactDOM from 'react-dom/client';

const root = document.getElementById('root');

if (root) {
  const app = document.createElement('div');
  app.innerHTML = '<p>Static page loaded.</p>';
  root.appendChild(app);
}
