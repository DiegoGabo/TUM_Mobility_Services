/*Component in which there are the information about acceleration and pre-emptive driving*/

import React from 'react';
import Popover from 'react-simple-popover';
import '../css/infoButton.css';

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
        <div
          className="button infobutton"
          ref="target">
          <i className="fa fa-info-circle infobuttonsymbol" aria-hidden="true"
          onMouseOver={this.handleClick.bind(this)}
          onMouseOut={this.handleClose.bind(this)}
          ></i></div>
        <Popover className = "infoPopover"
          placement='right'
          container={this}
          target={this.refs.target}
          show={this.state.open}>
          <p>{this.props.description}</p>
        </Popover>
      </div>
    );
  }
}
