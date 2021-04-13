import React, {Component} from 'react';
import Header from './components/header';
import Visual from './components/visual';
import VisualSlide from './components/visualSlide';
import Category from "./components/category";
import CardWrap from "./components/cardWrap";
import Footer from './components/footer';

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
