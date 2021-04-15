import React from 'react' 
import './App.css';
import Header from './Components/Header';
import Hero from './Components/Hero';
import Home from './Container/Home';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Contactus from './Container/Contactus';
import Post from './Container/Post';

function App() {
  return (
    <Router>
    <div className="App">
    
      <Header/>
      <Hero/>
      <Route exact path="/"  component={Home}/>
      <Route path="/Contact-us" component={Contactus}/>
      <Route path="/Posts/:postid" component={Post}/>

    </div>
    </Router>
  );
}

export default App;
