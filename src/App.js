import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Footer from './components/Footer/Footer';
import Slider from './components/AwesomwSlider/AwesomeSlider';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Slider />
        <Switch>
          <Route path='/' exact>
            {/* //Home */}
          </Route>
          <Route path='/myworks'>
            {/* //contacts */}
          </Route>
          <Route path='/contacts'>
            {/* //contacts */}
          </Route>
          <Route path='/info'>
            {/* //info */}
          </Route>
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
