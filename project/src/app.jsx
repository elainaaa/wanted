import React, {Component} from 'react';
import Header from './components/common/header';
import Visual from './components/contents/visual';
import VisualSlide from './components/contents/visualSlide';
import Category from "./components/contents/category";
import CardWrap from "./components/contents/cardWrap";
import Footer from './components/common/footer';

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
