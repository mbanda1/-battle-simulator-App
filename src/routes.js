import React from 'react';
import MainLayout from './layouts/MainLayout';
import lazyLoading from './components/LazyLoader';

const Battle = lazyLoading(
  () => import('./layouts/battle'),
  {
    fallback: <p> Loading ...</p>
  }
);
const Army = lazyLoading(() => import('./layouts/army'), {
  fallback: <p> Loading ...</p>
});
const Games = lazyLoading(() => import('./layouts/games'), {
  fallback: <p> Loading ...</p>
});


const routes = () => [
  {
    path: 'dash',
     children: [
      { path: 'battle', element: <Battle /> },
      { path: 'army', element: <Army /> },
      { path: 'game', element: <Games /> }
    ]
  },
  {
    path: '/',
    element:  <MainLayout />
  }
];

export default routes;
