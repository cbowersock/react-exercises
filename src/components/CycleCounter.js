import React from 'react';

class CycleCounter extends React.Component {

  constructor() {
    super();
    this.state = {
      count: 0,
      input: '',
      cycle: 0
    }
  }

  handleCycleClick = () => {
    if (this.state.count + 1 < this.state.cycle) {
      this.setState(prevState => {
        return {
          count: prevState.count + 1
        }
      })
    }
    else {
      this.setState({
        count: 0
      })
    }
  }

  handleValueClick = () => {
      this.setState({
          cycle: this.state.input
      })
  }

  handleChange = (event) => {
      this.setState({
          input: event.target.value
      })
  }

  render() {
    return (
      <div className="layout-column align-items-center mt-50">
      <h1>Cycle Counter</h1>
        <section className="pt-20 layout-row align-items-center justify-content-center">
        <input
            type="text"
            value={this.state.input}
            onChange={this.handleChange}
            ></input>
            <button
                onClick={this.handleValueClick}>
                Set Value To Cycle To
            </button>
            <br/>
          <button
            style={{ fontSize: '1rem', width: 120, height: 30, }}
            onClick={this.handleCycleClick}
          >{this.state.count}</button>
        </section>
      </div>
    );
  }
}

export default CycleCounter;