import React from 'react';

import '../css/navigation.css';
import '../css/navigationSubTitle.css';


export class NavigationSubTitle extends React.Component {

  render() {

    //modify the aspect of title if it is a active link
    let title
    if(this.props.active=="true"){
        title = <h5 className="select_text"><b>{this.props.title}</b></h5>
    }
    else{
        title =  <h5 className="select_text">{this.props.title}</h5>
    }

    return (
      <div className = "navigationSubTitle">
          <div className="row">

            <div className="col-sm-2">
              <i className="fa fa-angle-right angleIcons" aria-hidden="true"></i>
            </div>

            <div className="col-sm-10 navigationSubTitleText">
              <p>{title}</p>
            </div>

          </div>
        </div>
    );
  }
}
