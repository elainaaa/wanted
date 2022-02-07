import React, { Component } from 'react';
import Header from './components/common/Header';
import Visual from './components/contents/Visual';
import VisualSlide from './components/contents/VisualSlide';
import Category from './components/contents/Category';
import CardWrap from './components/contents/CardWrap';
import Footer from './components/common/Footer';

import './app.css';
class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Visual />
        <VisualSlide />
        <Category />
        <CardWrap />
        <Footer />
      </>
    );
  }
}

export default App;
