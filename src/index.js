import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import WatchVideo from './components/WatchVideo';
import VideoContainer from './components/VideoContainer';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';

const root = createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <VideoContainer />
      },
      {
        path: '/watch',
        element: <WatchVideo />
      }
    ]
  },
  {
    path: '*',
    element: () => <h1>Page Not Found</h1>,
    error: (error, location) => <h1>Error: {error.message}</h1>,
    fallback: () => <h1>Loading...</h1>,
  }
])


root.render(
  <Provider store={appStore}>
    <RouterProvider router={router} />
  </Provider>
);