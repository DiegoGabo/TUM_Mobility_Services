/*Component in which there are the information about acceleration and pre-emptive driving*/

import React from 'react';
import ReactTooltip from 'react-tooltip'
import '../css/infoButton.css';

export class InfoButton extends React.Component {

  render() {
    return (
      <div style={{zIndex:10}}>
        <div
          className="button infobutton"
          ref="target">
        <i data-tip data-for={this.props.id} className="fa fa-info-circle infobuttonsymbol" aria-hidden="true"></i>
        <ReactTooltip id={this.props.id} type='info'>
            {this.props.description}
        </ReactTooltip>
        </div>
      </div>
    );
  }
}
