/*Component that renders the footer of the application*/

import React from 'react';

import '../css/footer.css';

export class Footer extends React.Component {

  render() {
    return (
      <div className="foot">

        <div className="class-sm-12">

        {/*name of the company*/}
          <div className="col-sm-12">
            <p>© Copyright 2017 Team 2 Mobility Services - All Rights Reserved</p>
          </div>
        </div>

      </div>
    );
  }
}
