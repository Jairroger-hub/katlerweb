import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import firebase from 'firebase';
import { Provider } from 'react-redux';
import store from './store';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBtq9rm5YVWq1T8yc9Kd_VVrwXiiAqZ74",
  authDomain: "katler-3a9ef.firebaseapp.com",
  databaseURL: "https://katler-3a9ef.firebaseio.com",
  projectId: "katler-3a9ef",
  storageBucket: "katler-3a9ef.appspot.com",
  messagingSenderId: "597614569501",
  appId: "1:597614569501:web:5d8c6e15844ae88d89fef4",
  measurementId: "G-J3ZPT4KKXZ"
};


firebase.initializeApp(firebaseConfig);

window.store = store;

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
