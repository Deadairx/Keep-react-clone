import * as React from 'react';
import logo from './logo.svg';
import firebase from './Firebase';
import Header from './components/Header';
import Main from './components/Main';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
    </div>
  );
}

export default App;
