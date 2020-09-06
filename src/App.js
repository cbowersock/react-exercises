import React, { Component } from 'react';
import './index.css';

import TextEditor from './components/TextEditor';
import Translator from './components/Translator';

class App extends Component {
  render() {
      const {translations} = this.props;
    return (
      <div className="App">
        <TextEditor />
        <Translator translations={translations}/>
      </div>
    );
  }
}

export default App;