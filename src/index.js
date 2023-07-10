import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import './components/firebase/firebase'
import { App } from './components/App'
import { store } from '../src/store/store'
import { fetchProducts } from './slice/ProductsSlice';
import { HashRouter } from 'react-router-dom';
import { fetchAdresses } from './slice/AdressSlice';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <p>Loading...</p>
  </React.StrictMode>
);

store.dispatch(fetchProducts()).then(() => {
  store.dispatch(fetchAdresses()).then(() => {
    root.render(
      <React.StrictMode>
        <Provider store={store}>  
          <App/>
        </Provider>
      </React.StrictMode>
    );
  })
})

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
