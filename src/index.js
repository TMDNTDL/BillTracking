import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import sum from '@/test';
import { RouterProvider } from 'react-router-dom';
import router from '@/router'
import { Provider } from 'react-redux';
// import theme
import './theme.css'
import store from './store'


const total =  sum(1,3)
console.log(total)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <RouterProvider router = {router}/>
    </Provider>
   
  
);

