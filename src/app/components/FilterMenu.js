/*Component that renders a single menu filter inside of appHeader*/

import React from 'react';

export class FilterMenu extends React.Component {
    
  
  render() {
    return (
      <div>
        <div className="form-group col-sm-3">
          <div className="col-sm-3" style={{display: 'inline'}}><label>{this.props.title}:</label></div>
          <div className="col-sm-9">
            <select className="form-control" onChange={this.props.handleChange}>
            <option value={this.props.v1}>{this.props.v1}</option>
            <option value={this.props.v2}>{this.props.v2}</option>
            <option value={this.props.v3}>{this.props.v3}</option>
            <option value={this.props.v4}>{this.props.v4}</option>
          </select>
          </div>
        </div>
      </div>
    );
  }
}
