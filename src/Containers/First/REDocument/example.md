#### Task 1
```javascript

import React, { Component } from 'react';

export default class First extends Component {

  render () {
    const H2Tag = <h2>This is h2</h2>;
    return (
      <div>
        <h1>First Practice</h1>
        <section>
          {H2Tag}
        </section>
      </div>
    )
  }
}
```
---
```javascript
import React, { Component } from 'react';

const H2Tag = <h2>This is h2</h2>; // performance more perfect than last one

export default class First extends Component {

  render () {
    return (
      <div>
        <h1>First Practice</h1>
        <section>
          {H2Tag}
        </section>
      </div>
    )
  }
}

```
---
```javascript
import React, { Component } from 'react';

const H2Tag = ({innerHTML}) => <h2>{innerHTML}</h2>; // use Function Component

export default class First extends Component {

  render () {
    return (
      <div>
        <h1>First Practice</h1>
        <section>
          <H2Tag innerHTML={'This is h2'}/>
        </section>
      </div>
    )
  }
}

```

#### Task 2
``` javascript
import React, { Component } from 'react';

export default class First extends Component {

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

  componentWillUnmount() {
    this.stopClock();
  }

  render () {
    return (
      <div>
        <h1>First Practice</h1>
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

```
