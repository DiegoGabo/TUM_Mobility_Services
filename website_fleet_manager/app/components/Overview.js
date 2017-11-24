import React from 'react';
import  {OverviewHeader} from './OverviewHeader';
import  {AppList} from './AppList';
import  {MapPosition} from './MapPosition';
import  {Panels} from './Panels';
import  {Footer} from './Footer';

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import 'w3-css/w3.css';

export class Overview extends React.Component {
  
  render() {
    return (
      <div>
        <OverviewHeader />
        <MapPosition />
        <Panels />
        <Footer />
      </div>
    );
  }
}
