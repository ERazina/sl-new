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
import { Home, Art, Photo, Design, Contact, Info } from './pages/index'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Switch>
          <Route path='/' exact>
            <Home />
          </Route>
          <Route path='/art' exact>
            {Art}
          </Route>
          <Route path='/photo'>
            {Photo}
          </Route>
          <Route path='/design'>
            {Design}
          </Route>
          <Route path='/myworks'>
            {/* //contacts */}
          </Route>
          <Route path='/contacts'>
            {Contact}
          </Route>
          <Route path='/info'>
            {Info}
          </Route>
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
