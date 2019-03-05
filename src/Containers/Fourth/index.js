import React, { Component } from 'react';
import Child from './component/Child.js';

export default class Fourth extends Component {
  render () {
    return (
      <div>
        Fourth Practice
        <Child childName='Cchild'/>
      </div>
    );
  }
}
