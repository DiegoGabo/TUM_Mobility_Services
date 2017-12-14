/*Component that renders the Panel with info about the employee*/

import React from 'react';
import Select from 'react-select';

import '../css/filter.css';

export class Filter extends React.Component {

  constructor(props)
  {
      super(props);
      this.state = {employee: "0",
                    trip: "0",
                    employeeCaret: false,
                    overviewCaret: false,
                    costCaret: false,
                    listTrip: [],
                    listEmployee: [],
                   }
      this.handleChangeEmploee = this.handleChangeEmploee.bind(this)
      this.handleChangeTrip = this.handleChangeTrip.bind(this)
      this.changeEmployeeCaret = this.changeEmployeeCaret.bind(this)
      this.changeCostCaret = this.changeCostCaret.bind(this)
  }

   //function executed when you change the value of select employee menu
   handleChangeEmploee(e) {
		this.setState({
			employee: e.target.value
		});
       this.props.changeEmployee(e.target.value)
       let tripUrl = 'http://localhost:3000/user/' + e.target.value + '/trips'
       fetch(tripUrl)
              .then(res => res.json())
              .then(listTrip => this.setState({listTrip}))
       
  }

   //function executed when you change the value of select trip menu
   handleChangeTrip(e) {
		this.setState({
			trip: e.target.value
		});
       this.props.changeTrip(e.target.value)
  }

  //function used to expand the employee panel
  changeEmployeeCaret() {
      if(this.state.employeeCaret == false)
        {
          this.setState({employeeCaret: true})
          fetch('http://localhost:3000/users')
              .then(res => res.json())
              .then(listEmployee => this.setState({listEmployee}))
          
          this.props.changePanel("kpi")
        }
      else
        {this.setState({employeeCaret: false})}
      
  }

  //function used to expand the cost panel
  changeCostCaret() {
      if(this.state.costCaret == false)
        {
          this.setState({costCaret: true})
          this.props.changePanel("cost")
        }
      else
        {this.setState({costCaret: false})}
      
  }
    
  render() {
    
    /*list of employee*/
    let options = this.state.listEmployee

    //jdx element with the options of employee select menu
    const listEmployee = options.map((employee) =>
                            <option value={employee.id}>{employee.name}</option>)

    let menuTrip
    //if employee is overall there isn't the trip list
    if (this.state.employee == "0")
    {
        menuTrip = <div></div>
    }
    else
    {
      //list of the trip of the specified employee
      let trips = this.state.listTrip
      //jdx element with the options of trip select menu
      let listTrip =  trips.map((trip) =>
                            <option value={trip._id}>{trip.create_date}</option>)

      //jdx element with menu options
      menuTrip = <div className="col-sm-12">
                    <h4 className="filter_text"><i className="fa fa-search-plus" aria-hidden="true"></i>
                        <select className="select_menu" value={this.state.trip} onChange={this.handleChangeTrip}>
                            <option value="0">Overall</option>
                            {listTrip}
                        </select>
                    </h4>
                 </div>
    }

    let employeePanel
    let overviewPanel
    let costPanel
    if(this.state.employeeCaret == false)
    {
        employeePanel = <div>
                          <div className="row">
                          <div className="col-sm-2">
                            <i className="fa fa-user-o icon" aria-hidden="true"></i>
                          </div>

                          <div className="col-sm-8">
                            <h3 className="select_text">Selection on Empl./Trip</h3>
                          </div>
                          <div className="col-sm-2">
                            <i className="fa fa-caret-right icon" aria-hidden="true" onClick={this.changeEmployeeCaret}></i>
                          </div>
                          </div>
                        </div>
    }
    else
    {
        employeePanel = <div><div className="row">
                          <div className="col-sm-2">
                            <i className="fa fa-user-o icon" aria-hidden="true"></i>
                          </div>

                          <div className="col-sm-8">
                            <h3 className="select_text">Selection on Empl./Trip</h3>
                          </div>
                          <div className="col-sm-2">
                            <i className="fa fa-caret-down icon" aria-hidden="true" onClick={this.changeEmployeeCaret}></i>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-sm-1"></div>
                          <div className="col-sm-11">
                            <div className="col-sm-12">
                              <h4 className="filter_text"><i className="fa fa-search-plus" aria-hidden="true"></i>
                                <select className="select_menu" value={this.state.employee} onChange={this.handleChangeEmploee}>
                                    <option value="0">Overall</option>
                                    {listEmployee}
                                </select>
                              </h4>
                            </div>
                            {menuTrip}
                          </div>
                        </div>
                      </div>
    }

    if(this.state.costCaret == false)
    {
        costPanel = <div>
                      <div className="row">
                          <div className="col-sm-2">
                            <i className="fa fa-user-o icon" aria-hidden="true"></i>
                          </div>

                          <div className="col-sm-8">
                            <h3 className="select_text">Cost Calculation/Effect</h3>
                          </div>

                          <div className="col-sm-2">
                            <i className="fa fa-caret-right icon" aria-hidden="true" onClick={this.changeCostCaret}></i>
                          </div>

                        </div>
                     </div>
    }
    else
    {
        costPanel = <div>
                        <div className="row">
                          <div className="col-sm-2">
                            <i className="fa fa-user-o icon" aria-hidden="true"></i>
                          </div>

                          <div className="col-sm-8">
                            <h3 className="select_text">Cost Calculation/Effect</h3>
                          </div>

                          <div className="col-sm-2">
                            <i className="fa fa-caret-down icon" aria-hidden="true" onClick={this.changeCostCaret}></i>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-sm-1"></div>

                          <div className="col-sm-11">
                            <h4 className="filter_text"><i className="fa fa-search-plus" aria-hidden="true"></i>Overview Company</h4>
                          </div>

                        </div>

                      </div>

    }

    return (
      <div className="filter_all">

        <div className="filter_title">
            <h2 className="filter_title-text">Navigation</h2>
        </div>

        {employeePanel}

        <div className="row"></div>
        <hr className ="hr_Row"/>
        <div className="row">
          <div className="col-sm-2">
            <i className="fa fa-industry icon" aria-hidden="true"></i>
          </div>

          <div className="col-sm-8">
            <h3 className="select_text">Overview Company</h3>
          </div>
          <div className="col-sm-2">
            <i className="fa fa-caret-right icon" aria-hidden="true"></i>
          </div>
        </div>

        <hr className ="hr_Row"/>
        {costPanel}

      </div>
    );
  }
}
