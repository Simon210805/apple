import React, { Component } from 'react'
import Header from './components/header/Header'
import AllSections from "./components/allSections/AllSections"
import Footer from './components/footer/Footer';
import "bootstrap/dist/css/bootstrap.min.css";
import './commonResource/css/styles.css'
 class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <AllSections />
        <Footer/>
      </div>
    );
  }
}
export default App;