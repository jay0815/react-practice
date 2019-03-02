import React, { Component } from 'react';
import {
  withRouter
} from "react-router-dom";
/**
 * 中文说明目标
 */
@withRouter
export default class TestHistory extends Component {
  render () {
    console.log(this);
    return (
      <div>
        TestHistory
      </div>
    );
  }
}
