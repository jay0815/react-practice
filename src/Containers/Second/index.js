import React, { Component } from 'react';
import {
  Link
} from "react-router-dom";
/**
 * 中文说明目标
 */

export default class Second extends Component {
  render () {
    return (
      <div>
        Second Practice
        <Link to={'/'}>go back</Link>
      </div>
    );
  }
}
