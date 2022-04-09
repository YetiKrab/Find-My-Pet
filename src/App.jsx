import React , {Component} from 'react';
import { Switch, Route } from 'react-router-dom';
import MainContainer from './mainContainer.jsx';
import './style.scss';
import { Link } from "react-router-dom"


const App = () => (
    <div id="app">
     
    <MainContainer />
  </div>
);

export default App;