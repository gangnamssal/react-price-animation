import Count from '@libs/CountAnimate.tsx';
import React from 'react';
import ReactDOM from 'react-dom/client';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Count number={12341234} comma={false} />
  </React.StrictMode>,
);
