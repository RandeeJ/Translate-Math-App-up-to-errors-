import React, { Component } from 'react';

import Language from './language';
import Translation from './translation';
import Calculator from './calculator';

export default class App extends Component {


  constructor(props){
    super(props);

}
  render() {
    return (
      <div>
          <div className='app'>
            <h1>Translate Math App</h1>
            <h2>Translate any math calculation into another language!</h2>
          </div>

          

          <div className="calculator-container">
            <Calculator />
          </div>

          <div className="language_container">
            <Language />
          </div>

          <div className="translation-container">
            <div className='display-calculation-container'>
            <Translation/>
            </div>
          </div>
      </div>
    );
  }
}
