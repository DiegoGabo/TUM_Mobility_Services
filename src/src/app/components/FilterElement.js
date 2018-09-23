import React from 'react';


export class FilterElement extends React.Component {

  render() {
    return (
      <div class="radio">
              <label ><input onChange={this.props.handleChange} type="radio" name={this.props.name} value={this.props.value} checked={this.props.checked}/>{this.props.value}</label>
      </div>
    );
  }
}
