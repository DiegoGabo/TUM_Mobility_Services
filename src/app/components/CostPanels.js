import React from 'react';

import  {CalcolationPanel} from './CalcolationPanel';
import  {RankingPanel} from './RankingPanel';


export class CostPanels extends React.Component {

  render() {
    return (
      <div>
        <CalcolationPanel />
        <RankingPanel />
      </div>
    );
  }
}
