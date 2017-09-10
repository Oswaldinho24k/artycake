import React, { Component } from 'react';
import Routes from './Routes';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import './index.css';


class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Routes/>
          <Footer/>
      </div>
    );
  }
}

export default App;
