/*Component in which there are the information about acceleration and pre-emptive driving*/
import {NotificationPanel} from './NotificationPanel'

import React from 'react';

export class NotificationPanels extends React.Component {


  render()
  {
    return (
      <div>
        <NotificationPanel date="05/01/2018" name="Christoph NG" problem="High Fuel Consumption" value="280" type="0" graphics="0"/>
        <NotificationPanel date="28/12/2017" name="BMW M2" problem="Inspection of Braking System" value="100" type="1" graphics="2"/>
        <NotificationPanel date="27/12/2017" name="Christoph NG" problem="High Fuel Consumption" value="230" type="0" graphics="0"/>
        <NotificationPanel date="10/10/2017" name="Max Mustermann" problem="Bad Driving Behavior" value="100" type="0" graphics="1"/>
        <NotificationPanel date="09/09/2017" name="Christoph NG" problem="High Fuel Consumption" value="200" type="0" graphics="0"/>
        <NotificationPanel date="01/10/2017" name="BMW i8" problem="Low Fuel State" value="10" type="1" graphics="4"/>
        <NotificationPanel date="08/09/2017" name="BMW i3" problem="Low Charging State" value="100" type="1" graphics="3"/>
        <div className = "col-sm-10"></div>
        <div className = "col-sm-2 moreNotifications" >More</div>
      </div>
    );
  }
}
