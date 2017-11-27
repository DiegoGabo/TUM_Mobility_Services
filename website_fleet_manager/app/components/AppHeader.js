import React from 'react';

import '../css/appHeader.css';

import  {FilterMenu} from './FilterMenu';

export class AppHeader extends React.Component {

  render() {
    return (
      <div className="appHeader">
        <h1>KPI Management</h1>

        <FilterMenu />
        <FilterMenu />
        <FilterMenu />
        <FilterMenu />

      </div>
    );
  }
}
