/*Component in which there are the information about acceleration and pre-emptive driving*/
import {NotificationPanel} from './NotificationPanel'

import React from 'react';

export class NotificationPanels extends React.Component {

  
  render() 
  {     
    return (
      <div>
        <NotificationPanel />
        <NotificationPanel />
        <NotificationPanel />
      </div>
    );
  }
}
