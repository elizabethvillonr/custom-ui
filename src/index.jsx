import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
// import { BrowserRouter } from 'react-router-dom';
import { RouterProvider } from "react-router-dom";
import store from "./redux/store.js"; // we'll add this file in the next step 
import { Provider } from "react-redux";
import { ConfigProvider } from 'antd';

import {router} from './router/router'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ConfigProvider
      theme={{
        token: {
          "colorPrimary": "#16A085",
          "colorInfo": "#16A085"
        },
      }}
    >
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
    </ConfigProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();