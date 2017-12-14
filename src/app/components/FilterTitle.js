import React from 'react';

import '../css/filter.css';


export class FilterTitle extends React.Component {

  render() {
    return (
      <div>
          <div className="row">
          <div className="col-sm-2">
            <i className="fa fa-user-o icon" aria-hidden="true"></i>
          </div>

          <div className="col-sm-8">
            <h3 className="select_text">{this.props.title}</h3>
          </div>
          <div className="col-sm-2">
            <i className="fa fa-caret-right icon" aria-hidden="true" onClick={this.props.handleClick}></i>
          </div>
          </div>
        </div>
    );
  }
}
