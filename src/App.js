import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Home from './container/home'
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/" exact component={Home}></Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
