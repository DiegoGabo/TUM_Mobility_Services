/*Component in which there are the menus used to modify the content inside the component Panel*/

import React from 'react';

import '../css/appHeader.css';

import  {FilterMenu} from './FilterMenu';

export class AppHeader extends React.Component {

  render() {
      
    return (
      <div className="appHeader">
        <h1>KPI Management</h1>

        <FilterMenu title="Vehicles" v1="BMW i3" v2="BMW i8" v3="BMW i8" v4="BMW i8" handleChange={this.props.handleChange}/>
        <FilterMenu title="Trips" v1="1" v2="2" v3="3" v4="4"/>
        <FilterMenu title="Employees" v1="1" v2="2" v3="3" v4="4"/>
        <FilterMenu title="KPI" v1="1" v2="2" v3="3" v4="4"/>
  
    
      </div>
    );
  }
}
