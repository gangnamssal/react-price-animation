import Count from '@libs/CountAnimate.tsx';
import React from 'react';
import ReactDOM from 'react-dom/client';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Count number={123214} startDirection='right' />
  </React.StrictMode>,
);
