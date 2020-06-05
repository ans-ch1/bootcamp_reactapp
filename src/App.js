import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello World here is</p>
        <p><i>Ans Choudhary</i></p>
        <h>This is my first React app.</h>
        <a
          className="App-link"
          href="https://www.facebook.com/Ans.choudhary01/"
          target="_Facebook"
          rel="noopener noreferrer"
        >
          You can contact me on Facebook.
        </a>
        <a
          className="App-link"
          href="https://www.instagram.com/ans_ch1/"
          target="_blank"
          rel="noopener noreferrer"
        >
          You can contact with me on Instagram.
        </a>
      </header>
    </div>
  );
}

export default App;
