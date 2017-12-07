/*Component in which there are the menus used to modify the content inside the component Panel*/

import React from 'react';

import '../css/appHeader.css';

import  {FilterMenu} from './FilterMenu';

export class AppHeader extends React.Component {

  render() {
      
    return (
      <div className="appHeader">
        <h1>KPI Management</h1>

        <FilterMenu title="Vehicles" v1="WBY1Z21000V308999" v2="WBA1S510805J88762" v3="WBAUD91090P381103" v4="WBAUD91090P381103" handleChange={this.props.handleChange}/>
        <FilterMenu title="Trips" v1="1" v2="2" v3="3" v4="4"/>
        <FilterMenu title="Employees" v1="1" v2="2" v3="3" v4="4"/>
        <FilterMenu title="KPI" v1="1" v2="2" v3="3" v4="4"/>
  
    
      </div>
    );
  }
}
