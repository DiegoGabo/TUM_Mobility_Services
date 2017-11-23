import React from 'react';
import  {OverviewHeader} from './OverviewHeader';
import  {AppList} from './AppList';
import  {MapPosition} from './MapPosition';
import  {Panels} from './Panels';
import  {Footer} from './Footer';

export class Overview extends React.Component {
  
  render() {
    return (
      <div>
        <OverviewHeader />
        <AppList />
        <MapPosition />
        <Panels />
        <Footer />
      </div>
    );
  }
}
