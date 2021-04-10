import React, {Component} from 'react';
import Header from './components/header';
import Visual from './components/visual';
import Category from "./components/category"
import CardWrap from "./components/cardWrap"

import './app.css';


class App extends Component {
    render() {
        return (
          <>
          <Header />
          <Visual />
      <div className="App">
          <div style = {{ paddingTop : 60 , paddingBottom: 60}}>
        <Category></Category>
        <CardWrap></CardWrap>
          </div>
      </div>
      </>
  );
}
}


export default App;
