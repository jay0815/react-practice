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
