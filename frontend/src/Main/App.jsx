import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import React from 'react';

import { BrowserRouter } from 'react-router-dom'

import Routes from './Routes'
import Logo from '../Components/Template/Logo';
import Nav from '../Components/Template/Nav';
import Footer from '../Components/Template/Footer';

const App = (props) => {
    return (
  <BrowserRouter>
        <div className="app">
            <Logo />
            <Nav />
            <Routes />
            <Footer />
        </div>
    </BrowserRouter>
    );
}

export default App; // Export the named variable 'App'
