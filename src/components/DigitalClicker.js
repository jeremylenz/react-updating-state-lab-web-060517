// Code DigitalClicker Component Here
import React from 'react';

class DigitalClicker extends React.Component {
  constructor(props) {
    super(props)
    this.state = {timesClicked: 0}
  }

  render() {
    return (
      <div>
      <button onClick={this.incrementButton} value={this.state.timesClicked}>{this.state.timesClicked}</button>
      </div>
    )
  }

  incrementButton = () => {
    let curTimesClicked = this.state.timesClicked
    this.setState({timesClicked: ++curTimesClicked})
  }
}

export default DigitalClicker
