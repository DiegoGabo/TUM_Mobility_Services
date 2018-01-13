/*Component in which there are the information about acceleration and pre-emptive driving*/

import React from 'react';
import Popover from 'react-simple-popover';

export class InfoButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }
 
  handleClick(e) {
    this.setState({open: !this.state.open});
  }
 
  handleClose(e) {
    this.setState({open: false});
  }
 
  render() {
    return (
      <div>
        <a
          href="#"
          className="button"
          ref="target"
          onClick={this.handleClick.bind(this)}><i className="fa fa-info-circle" aria-hidden="true"></i></a>
        <Popover
          placement='right'
          container={this}
          target={this.refs.target}
          show={this.state.open}
          onHide={this.handleClose.bind(this)} >
          <p>{this.props.description}</p>
        </Popover>
      </div>
    );
  }
}
