import React from 'react';

import '../css/navigation.css';


export class NavigationSubTitle extends React.Component {

  render() {
    return (
      <div>
          <div className="row">
        
            <div className="col-sm-2">
              <i class="fa fa-angle-right" aria-hidden="true"></i>
            </div>

            <div className="col-sm-10">
              <h5 className="select_text">{this.props.title}</h5>
            </div>
        
          </div>
        </div>
    );
  }
}
