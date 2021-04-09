import React, {Component} from 'react';
import Category from "./components/category"
import CardWrap from "./components/cardWrap"

import './app.css';

class App extends Component {
    render() {
        return (
      <div className="App">
          <div style = {{ paddingTop : 60 , paddingBottom: 60}}>
        <Category></Category>
        <CardWrap></CardWrap>
          </div>
      </div>

  );
}
}


export default App;
