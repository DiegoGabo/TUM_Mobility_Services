/*Component that renders the Panel with info about the employee*/

import React from 'react';
import Select from 'react-select';

import '../css/filter.css';

export class Filter extends React.Component {

  constructor(props)
  {
      super(props);
      this.state = {employee: "Overall",
                    trip: "Overall"}
      this.handleChangeEmploee = this.handleChangeEmploee.bind(this)
      this.handleChangeTrip = this.handleChangeTrip.bind(this)
  }

   //function executed when you change the value of select employee menu
   handleChangeEmploee(e) {
		this.setState({
			employee: e.target.value
		});
       this.props.changeEmployee(e.target.value)
  }

   //function executed when you change the value of select trip menu
    handleChangeTrip(e) {
		this.setState({
			trip: e.target.value
		});
       this.props.changeTrip(e.target.value)
  }

  render() {

    /*list of employee*/
    let options = [
      { value: '1', label: 'HansPeter' },
      { value: '2', label: 'Andrea Lalli' },
      { value: '3', label: 'Kilian Jornet' },
      ]
    const defaultOption = { value: 'Overall', label: 'Overall' }
    options.unshift(defaultOption)

    //jdx element with the options of employee select menu
    const listEmployee = options.map((employee) =>
                            <option value={employee.value}>{employee.label}</option>)

    let menuTrip
    //if employee is overall there isn't the trip list
    if (this.state.employee == "Overall")
    {
        menuTrip = <div></div>
    }
    else
    {
      //list of the trip of the specified employee
      let trips = [
      { value: '1', label: '2017/10/2' },
      { value: '2', label: '2017/11/3' },
      { value: '3', label: '2017/11/5' },
      ]
      let defaultTrip =  { value: 'Overall', label: 'Overall' }
      trips.unshift(defaultTrip)

      //jdx element with the options of trip select menu
      let listTrip =  trips.map((trip) =>
                            <option value={trip.value}>{trip.label}</option>)

      //jdx element with menu options
      menuTrip = <div className="col-sm-12">
                    <h4 className="filter_text"><i className="fa fa-search-plus" aria-hidden="true"></i>
                        <select className="select_menu" value={this.state.trip} onChange={this.handleChangeTrip}>
                            {listTrip}
                        </select>
                    </h4>
                 </div>
    }

    return (
      <div className="filter_all">

        <div className="filter_title">
            <h2 className="filter_title-text">Navigation</h2>
        </div>

        <div className="row">
          <div className="col-sm-2">
            <i className="fa fa-user-o icon" aria-hidden="true"></i>
          </div>

          <div className="col-sm-8">
            <h3 className="select_text">Selection on Empl./Trip</h3>
          </div>
          <div className="col-sm-2">
            <i className="fa fa-caret-down icon" aria-hidden="true"></i>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-1"></div>
          <div className="col-sm-11">
            <div className="col-sm-12">
              <h4 className="filter_text"><i className="fa fa-search-plus" aria-hidden="true"></i>
                <select className="select_menu" value={this.state.employee} onChange={this.handleChangeEmploee}>
                    {listEmployee}
                </select>
              </h4>
            </div>
            {menuTrip}
          </div>
        </div>

        <div className="row"></div>
        <hr/>
        <div className="row">
          <div className="col-sm-2">
            <i className="fa fa-industry icon" aria-hidden="true"></i>
          </div>

          <div className="col-sm-8">
            <h3 className="select_text">Selection on Empl./Trip</h3>
          </div>
          <div className="col-sm-2">
            <i className="fa fa-caret-right icon" aria-hidden="true"></i>
          </div>
        </div>

        <hr/>
        <div className="row">
          <div className="col-sm-2">
            <i className="fa fa-usd icon" aria-hidden="true"></i>
          </div>

          <div className="col-sm-8">
            <h3 className="select_text">Selection on Empl./Trip</h3>
          </div>
          <div className="col-sm-2">
            <i className="fa fa-caret-right icon" aria-hidden="true"></i>
          </div>
        </div>

      </div>
    );
  }
}
