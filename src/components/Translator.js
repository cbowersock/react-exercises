import React from 'react';

class Translator extends React.Component {

  constructor() {
    super();
    this.state = {
      input: '',
      output: ''
    }
  }

  handleChange = (event) => {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
    if (this.props.translations.has(value)) {
      this.setState({
        output: this.props.translations.get(value)
      })
    }
    else {
      this.setState({
        output: ''
      })
    }
  }

  render() {
    return (
      <React.Fragment>
      <h1>Translator</h1>
        <div className="controls">
          <div className="input-container">
            <span>English:</span>
            <input 
              type="text" 
              className="text-input"
              onChange={this.handleChange} 
              name="input" 
              value={this.state.input}/>
          </div>
          <div className="input-container">
            <span>Spanish:</span>
            <input 
              type="text" 
              className="text-output"
              readOnly 
              name="output" 
              value={this.state.output}
              />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Translator;