import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

axios.defaults.baseURL = 'http://jsonplaceholder.typicode.com';
axios.defaults.headers.headers.common['Authorization'] = 'AUTH TOKEN';
axios.defaults.headers.post['Content-Type'] = 'application/json';


axios.interceptors.request.use((request) => {
  console.log('axios request:', request);
  return request;
}, (error) => {
  console.log('axios error:', error);
  return Promise.reject(error);
});

axios.interceptors.response.use((response) => {
  console.log('axios response:', response);
  return response;
}, (error) => {
  console.log('axios error:', error);
  return Promise.reject(error);
})

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
