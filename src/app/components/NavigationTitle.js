import React from 'react';

import '../css/navigation.css';
import  {InfoButton} from './InfoButton';


export class NavigationTitle extends React.Component {
    
  constructor(props)
  {
    super(props)
    this.ChangeMenu = this.ChangeMenu.bind(this)
  }
    
  //if you click on the menu it expands the corrisponding section
  ChangeMenu()
  {
    this.props.handleClick(this.props.title)
  }

  render() {
      
    
    return (
      <div>
          <div className="row" onClick={this.ChangeMenu}>
        
            <div className="col-sm-2">
              <i className={this.props.icon} aria-hidden="true"></i>
            </div>

            <div className="col-sm-9">
              <h3 className="select_text" >{this.props.title}</h3>
            </div>
        
            <div className="col-sm-1">
                <InfoButton description={this.props.description}/>
            </div>
        
          </div>
        </div>
    );
  }
}
