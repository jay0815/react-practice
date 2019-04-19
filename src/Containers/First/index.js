import React, {
  Component
} from 'react';
import {
  connect
} from 'react-redux';
import {
  bindActionCreators
} from 'redux';
import {
  updateReason
} from './../../Actions/Third.js';
import {
  addNumber,
  orginalAddNumber
} from './../../Actions/Second.js';
class Third extends Component {

  changeReason = () => this.props.updateReason('you had change reason');

  add = () => this.props.orginalAddNumber(1);

  render() {
    return ( 
      <div>
        <label>{this.props.testNumber}</label>
        <button onClick={this.add}>add</button>
        <div onClick = {this.changeReason}>
          Third Practice {this.props.reason} 
          {
            this.props.nameList.map((item) => <span key = { item} > {item} </span>
            )
          } 
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateReason: bindActionCreators(updateReason, dispatch),
  orginalAddNumber: bindActionCreators(orginalAddNumber, dispatch),
  addNumber: bindActionCreators(addNumber, dispatch)
})

const mapStateToProps = (state) => ({
  testNumber: state.secondState.testNumber,
  reason: state.thirdState.reason,
  nameList: state.thirdState.nameList
});

export default connect(mapStateToProps, mapDispatchToProps)(Third)