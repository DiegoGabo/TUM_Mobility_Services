/*Component in which there are the information about acceleration and pre-emptive driving*/
import {NotificationPanel} from './NotificationPanel'

import React from 'react';

export class NotificationPanels extends React.Component {


  render()
  {
    return (
      <div>
        <NotificationPanel date="27/12/2017" name="Max Mustermann" problem="High Fuel Consumption" value="100" type="0"/>
        <NotificationPanel date="31/12/2017" name="BMW i8" problem="High Fuel Consumption" value="100" type="1"/>
        <NotificationPanel date="27/12/2017" name="Max Mustermann" problem="High Fuel Consumption" value="100" type="0"/>
        <NotificationPanel date="31/12/2017" name="BMW i8" problem="High Fuel Consumption" value="100" type="1"/>
        <NotificationPanel date="27/12/2017" name="Max Mustermann" problem="High Fuel Consumption" value="100" type="0"/>
        <NotificationPanel date="31/12/2017" name="BMW i8" problem="High Fuel Consumption" value="100" type="1"/>
        <NotificationPanel date="27/12/2017" name="Max Mustermann" problem="High Fuel Consumption" value="100" type="0"/>
        <NotificationPanel date="31/12/2017" name="BMW i8" problem="High Fuel Consumption" value="100" type="1"/>
        
      </div>
    );
  }
}
