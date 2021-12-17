import React, { Component } from 'react';

import Language from './language';
import Translation from './translation';
import Calculation from './calculation';

export default class App extends Component {
  render() {
    return (
      <div>
      <div className='app'>
        <h1>Translate Math App</h1>
        <h2>Translate any math calculation into another language!</h2>
      </div>

      

      <div className="calculation-container">
        <Calculation />
      </div>

      <div className="language_container">
        <Language />
      </div>

      <div className="translation-container">
        <Translation />
      </div>
      </div>
    );
  }
}
