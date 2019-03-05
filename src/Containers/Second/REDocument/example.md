#### Task 1
从命令行进入工程
```Shell
mkdir src/Second/REDocument
touch src/Second/REDocument/Child.js
```
---
> index.js

```Javascript
import React, { Component } from 'react';
import Child from './component/Child.js';

export default class Second extends Component {
  render () {
    return (
      <div>
        Second Practice
        <Child childName='Cchild'/>
      </div>
    );
  }
}

```
---
> Child.js

```Javascript
import React, { Component } from 'react';

export default class Child extends Component {
  render () {
    return (
      <p>{this.props.childName}</p>
    );
  }
}

```
#### Task 2
---
> index.js


```Javascript
import React, { Component } from 'react';
import Child from './component/Child.js';

export default class Second extends Component {
  render () {
    return (
      <div>
        Second Practice
        <Child childName='Cchild'/>
        {/*
          <Child />
          */}
      </div>
    );
  }
}

```
---
> Child.js

```Javascript
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Child extends Component {
  static propTypes = {
    childName: PropTypes.string.isRequired
  }
  render () {
    return (
      <p>{this.props.childName}</p>
    )
  }
}

```
- 用法详见 [prop-types](https://github.com/facebook/prop-types)
