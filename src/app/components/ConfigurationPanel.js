import React from 'react';
import Select from 'react-select';

import  {NavigationTitle} from './NavigationTitle';
import  {NavigationSubTitle} from './NavigationSubTitle';
import {ConfigurationSlider} from './ConfigurationSlider.js';

import '../css/navigation.css';

export class ConfigurationPanel extends React.Component {

    
  render(){
        
    return (
      <div className="navigation_all">

        <div className="navigation_title">
            <h2 className="navigation_title-text">Configuration</h2>
        </div>

        <NavigationTitle title="Employee Notifications" icon="fa fa-user-o icon" description="Set the thresholds for employees notifications"/>
        <ConfigurationSlider min={1} max={20} value={14} title="Fuel Consumption" />
        <ConfigurationSlider min={1} max={5} value={3} title="Driving Behaviour"/>
        
        <NavigationTitle title="Braking System" icon="fa fa-car icon" description="Set the thresholds for vehicle notifications"/>
        <ConfigurationSlider min={1} max={100} value={20} title="Fuel State" />
        <ConfigurationSlider min={1} max={100} value={30} title="Charging State" />
        <ConfigurationSlider min={1} max={5} value={3} title="Driving Behaviour"/>

      </div>
    );
  }
}
