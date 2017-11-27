import React from 'react';

export class FilterMenu extends React.Component {
  
  render() {
    return (
      <div>
        <div className="form-group col-sm-3">
          <div className="col-sm-3"><label>Vehicle:</label></div>
          <div className="col-sm-9">
            <select className="form-control">
            <option>BMW i3</option>
            <option>BMW i8</option>
            <option>BMW m5</option>
            <option>BMW x6</option>
          </select>
          </div> 
        </div>
      </div>
    );
  }
}