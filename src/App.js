import React, { Component } from 'react';
import './App.css';
import Footer from './Footer/Footer';
import Content from './Content/Content';

class App extends Component {
  


  render() {
    return (

      <div className="App">

        <Content/>
        <Footer/>
      </div>
    );
  }
}

export default App;
