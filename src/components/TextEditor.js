import React from 'react';

class TextEditor extends React.Component {
  constructor() {
    super();
    this.state = {
      input: '',
      display: ''
    }
  }

  handleInput = (event) => {
    const {name, value} = event.target;
    this.setState({
      [name]: value
    })
  }

  handleAppend = () => {
      this.setState(prevState => {
        return {
          display: prevState.display + this.state.input + ' '
        }
      })
      this.setState({
        input: ''
      })
  }

  handleUndo = () => {
    const wordArray = this.state.display.split(' ');
    if (wordArray[wordArray.length - 1] === '') {
      wordArray.pop();
    }
    wordArray.pop();
    this.setState({
      display: wordArray.join(' ') + ' '
    })
  }

  render() {
    return (
      <React.Fragment>
      <h1>Text Editor</h1>
        <div className="controls">
          <input 
            className="word-input" 
            type="text" 
            data-testid="word-input"
            value={this.state.input}
            name="input"
            onChange={this.handleInput} 
            />
          <button 
            data-testid="append-button"
            name="appendButton"
            onClick={this.handleAppend}
            disabled={this.state.input === ''}
            >Append</button>
          <button 
            data-testid="undo-button"
            name="undoButton"
            onClick={this.handleUndo}
            disabled={this.state.display === '' || this.state.display === ' '}
            >Undo</button>
        </div>
        <div 
          className="text-field" 
          data-testid="text-field"
          name="display"
          >{this.state.display}</div>
      </React.Fragment>
    );
  }
}

export default TextEditor;