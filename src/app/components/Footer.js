/*Component that renders the footer of the application*/

import React from 'react';

import '../css/footer.css';

export class Footer extends React.Component {

  render() {
    return (
      <div className="foot">

        <div className="class-sm-12">

        {/*name of the company*/}
          <div className="col-sm-9">
            <p>© Copyright 2017 Team 2 Mobility Services - All Rights Reserved</p>
          </div>

        {/*social network links*/}
          <div className="col-sm-2">
             <i className="fa fa-facebook-square"></i>
             <i className="fa fa-google-plus-official"></i>
             <i className="fa fa-linkedin-square"></i>
             <i className="fa fa-pinterest"></i>
             <i className="fa fa-twitter-square"></i>
          </div>

        </div>

      </div>
    );
  }
}
