import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { store } from './redux/store'
import { Provider } from 'react-redux'
import {BrowserRouter} from "react-router-dom"
import ScrollToTop from "./pages/components/ScrollToTop";


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <BrowserRouter>
        <Provider store={store}>
            <ScrollToTop />
            <App />
        </Provider>
    </BrowserRouter>
);
