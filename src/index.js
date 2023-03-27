import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import App from './App';
import 'react-toastify/dist/ReactToastify.css';
import NavBar from './components/NavBar';
import { store } from './store/Store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <ToastContainer/>
    <Provider store={store}>
    <NavBar/>
    <App />
    </Provider>
    
    </BrowserRouter>
  </React.StrictMode>
);


