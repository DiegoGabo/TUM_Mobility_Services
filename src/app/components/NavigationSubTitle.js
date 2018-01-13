import React from 'react';

import '../css/navigation.css';
import '../css/navigationSubTitle.css';
import  {InfoButton} from './InfoButton';


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

            <div className="col-sm-7 navigationSubTitleText">
              <p>{title}</p>
            </div>

            <div className="col-sm-3 infoButtonSubTitle">
                <InfoButton description={this.props.description}/>
            </div>

          </div>
        </div>
    );
  }
}
