import React from 'react';
import ReactDOM from 'react-dom';
import routes from './routes';
import CoreLayout from './common/layouts/CoreLayout';
import './styles/_main.scss';
import { RouterProvider } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <CoreLayout>
      <RouterProvider router={routes}/>
    </CoreLayout>
  </React.StrictMode>,
  document.getElementById('root')
);
