import * as React from 'react'
import ReactDOM from 'react-dom/client';

import { store } from './Redux/Store'
import { Provider } from 'react-redux'

import App from './App';

import { BrowserRouter } from "react-router-dom";

import "./index.css"


const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
);
