/*Component in which there are the information about acceleration and pre-emptive driving*/
import {NotificationPanel} from './NotificationPanel'
import {FilterElement} from './FilterElement'

import React from 'react';
import '../css/notificationPanelHeader.css';

export class NotificationPanels extends React.Component {

  constructor(props)
  {
      super(props);
      this.state = {
                    filterActive: "false",
                    date: "All",
                    type: "Employee and Vehicle",
                    description: "All",
                    listNotifications: [],
                   }
      this.handleClickFilter = this.handleClickFilter.bind(this)
      this.handleChangeDate = this.handleChangeDate.bind(this)
      this.handleChangeType = this.handleChangeType.bind(this)
      this.handleChangeDescription = this.handleChangeDescription.bind(this)
      this.handleNotificationClick = this.handleNotificationClick.bind(this)
      this.checkFilter = this.checkFilter.bind(this)
      this.checkType = this.checkType.bind(this)
  }
    
  checkDate(date){
      var d = new Date()
      let month = d.getMonth()+1
      let previousMonth = d.getMonth()
      let date7before
      if(d.getDate()>=7){
          date7before = d.getDate() - 7
      }
      else{
          date7before = 30 - 7 + d.getDate()
      }
      if(this.state.date=="All"){
          return "true"
      }
      if(this.state.date=="Last Month" && date.substring(5,7) == month){
          return "true"
      }
      if(this.state.date=="Today" && date == d.getDate()){
          return "true"
      }
      if(this.state.date=="Last 7 Days" && date.substring(8,10) >= date7before && date.substring(5,7) == month){
          return "true"
      }
      return "false"
  }
    
  checkType(type){
      if(this.state.type=="Employee and Vehicle" || this.state.type==type){
          return "true"
      }
      return "false"
  }
    
  checkProblem(problem){
      if(this.state.description==problem || this.state.description=="All"){
          return "true"
      }
      return "false"
  }

  checkFilter(date, type, problem){
      let isDateSelected=this.checkDate(date), isTypeSelected=this.checkType(type), isProblemSelected=this.checkProblem(problem)
      if(isDateSelected=="false" || isTypeSelected=="false" || isProblemSelected=="false"){
          return "false"
      }
      return "true"
  }

  componentDidMount()
  {
      let url = 'https://bemostwanted.herokuapp.com/api/notifications'
      fetch(url)
          .then(res => res.json())
          .then(listNotifications => this.setState({listNotifications}))
  }

  handleClickFilter(){
      if(this.state.filterActive == "false"){
        this.setState({filterActive: "true"})
      }
      else{
        this.setState({filterActive: "false"})
      }
  }

 handleChangeDate(e){
     this.setState({date: e.target.value})
 }

 handleChangeType(e){
     this.setState({type: e.target.value})
 }

 handleChangeDescription(e){
     this.setState({description: e.target.value})
 }

 handleNotificationClick(){
     this.props.changePanel("People Management")
     this.props.changeEmployee("2", "Christoph NG")
     this.props.changeTrip("0")
 }

  render()
  {

    let filter = <div></div>
    if(this.state.filterActive == "true"){
        filter =
        <div className = "filterNotificationHeader">
          <div className="col-sm-3 content_header_column form-group">
            <div className="col-sm-3"></div>
            <div className="col-sm-9 filterElement">
              <FilterElement handleChange={this.handleChangeDate} name="optradio1" value="Today" checked={this.state.date === 'Today'}/>
              <FilterElement handleChange={this.handleChangeDate} name="optradio1" value="Last 7 Days" checked={this.state.date === 'Last 7 Days'}/>
              <FilterElement handleChange={this.handleChangeDate} name="optradio1" value="Last Month" checked={this.state.date === 'Last Month'}/>
              <FilterElement handleChange={this.handleChangeDate} name="optradio1" value="All" checked={this.state.date === 'All'}/>
            </div>
          </div>

          <div className="col-sm-3 content_header_column form-group">
            <div className="col-sm-3"></div>
            <div className="col-sm-9 filterElement">
              <FilterElement handleChange={this.handleChangeType} name="optradio2" value="Employee" checked={this.state.type === 'Employee'}/>
              <FilterElement handleChange={this.handleChangeType} name="optradio2" value="Vehicle" checked={this.state.type === 'Vehicle'}/>
              <FilterElement handleChange={this.handleChangeType} name="optradio2" value="Employee and Vehicle" checked={this.state.type === 'Employee and Vehicle'}/>
            </div>
          </div>

          <div className="col-sm-4 content_header_column form-group">
            <div className="col-sm-2"></div>
            <div className="col-sm-10 filterElement">
              <FilterElement handleChange={this.handleChangeDescription} name="optradio3" value="All" checked={this.state.description === 'All'}/>
              <h3>Employee Specific</h3>
              <FilterElement handleChange={this.handleChangeDescription} name="optradio3" value="High Fuel Consumption" checked={this.state.description === 'High Fuel Consumption'}/>
              <FilterElement handleChange={this.handleChangeDescription} name="optradio3" value="Bad Driving Behaviour" checked={this.state.description === 'Bad Driving Behaviour'}/>
              <h3>Vehicle Specific</h3>
              <FilterElement handleChange={this.handleChangeDescription} name="optradio3" value="Inspection of Braking System" checked={this.state.description === 'Inspection of Braking System'}/>
              <FilterElement handleChange={this.handleChangeDescription} name="optradio3" value="Low Charging State" checked={this.state.description === 'Low Charging State'}/>
              <FilterElement handleChange={this.handleChangeDescription} name="optradio3" value="Low Fuel State" checked={this.state.description === 'Low Fuel State'}/>
            </div>
          </div>

          <div className="col-sm-2 content_header_column form-group">
          </div>

        </div>
    }
    let notificationPanels
    try{
      notificationPanels = this.state.listNotifications.map((notification) =>
                            <NotificationPanel
                                changePanel={this.props.changePanel}
                                changeEmployee={this.props.changeEmployee}
                                changeTrip={this.props.changeTrip}
                                changeActiveMenu={this.props.changeActiveMenu}
                                date={notification.date}
                                hour={notification.hour}
                                name={notification.name}
                                id={notification.id}
                                type={notification.type}
                                problem={notification.problem}
                                value={notification.value}
                                photo={notification.photo}
                                filterDate={this.state.date}
                                filterType={this.state.type}
                                filterDescription={this.state.description}
                                active={this.checkFilter(notification.date, notification.type, notification.problem)}
                                />)
    }
    catch(e){console.log(e)}

    return (
      <div>
        <div onClick={this.handleClickFilter} className="content_header notificationHeader">

          <div className="col-sm-3 content_header_column">
            <div className="col-sm-4"><i className="fa fa-calendar icon" aria-hidden="true"></i></div>
            <div className="col-sm-8"><h3>Date</h3><hr/></div>
          </div>

          <div className="col-sm-3 content_header_column">
            <div className="col-sm-3"><i className="fa fa-tag icon" aria-hidden="true"></i></div>
            <div className="col-sm-9"><h3>Employee/Vehicle</h3><hr/></div>
          </div>

          <div className="col-sm-4 content_header_column">
            <div className="col-sm-2" ><i className="fa fa-list icon" aria-hidden="true"></i></div>
            <div className="col-sm-10"><h3>Description</h3><hr/></div>
          </div>

          <div className="col-sm-2 content_header_column">
            <button className = "filterButton" style={{height: "40px",
             width: "100px"}}>Filter <i className="fa fa-filter" aria-hidden="true"></i></button>
          </div>

        </div>

        {filter}
        {notificationPanels}
      </div>
    );
  }
}
