import React, { Component } from 'react';
import Child from './Child.js';
/**
 * 中文说明目标
 */

export default class Second extends Component {

  state = {
    value: 1
  }

  onClick = () => {
    this.state.value = 2;
    console.log('onClick', this.state.value);
    this.forceUpdate();
  }
  render () {
    console.log(this.state);
    return (
      <div onClick={this.onClick}>
        Second Practice
        {this.state.value}
        <Child childName='Cchild'/>
      </div>
    );
  }
}
