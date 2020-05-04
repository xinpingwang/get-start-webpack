import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import '../main.css';

ReactDOM.render(<App />, document.getElementById('app'));

if (module.hot) {
  module.hot.accept((error) => {
    if (error) {
      console.log(error);
    }
  });
}
