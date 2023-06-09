import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider as AlertProvider, positions , transitions } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import { Provider } from 'react-redux';
import store from './Redux/store';



const options = {
  timeout:5000,
  position:positions.BOTTOM_CENTER,
  transition:transitions.SCALE,
} 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Provider store={store} >
  <AlertProvider template={AlertTemplate} {...options}>
    <App />
    </AlertProvider>
    </Provider>
  </React.StrictMode>
);
