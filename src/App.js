import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';

// import Navbar from './Navbar';
import Home from './Home';

function App() {
  return (
      <div className="App">
        <Router>
          {/* <Navbar/> */}
          <Route exact path="/" component={Home}/>
        </Router>
      </div>
  );
}

export default App;
