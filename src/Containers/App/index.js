import React, { Component } from 'react';
/**
 * 中文说明目标
 */

export default class Entry extends Component {

  state = {
    time: new Date().toLocaleTimeString(),
    interval: void 0
  }

  componentDidMount(){
    this.startClock()
  }

  tickTock = () => this.setState({
    time: new Date().toLocaleTimeString()
  })

  startClock = () => this.setState({
    interval: setInterval(this.tickTock, 1000)
  })

  stopClock = () => {
    clearInterval(this.state.interval);
    this.setState({
      interval: void 0
    })
  }

  render () {
    return (
      <div>
        <h1>Hello React</h1>
        <section>
          <h2>
            现在是北京时间：{this.state.time}
          </h2>
          <button onClick={
            this.state.interval ? this.stopClock : this.startClock
          }>
            {this.state.interval ? 'stop' : 'start'}!
          </button>
        </section>
      </div>
    )
  }
}
