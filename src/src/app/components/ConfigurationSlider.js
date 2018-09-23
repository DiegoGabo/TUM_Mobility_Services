import React from 'react';
import Slider from 'react-rangeslider';
import 'react-rangeslider/lib/index.css'
import '../css/navigationSubTitle.css';

export class ConfigurationSlider extends React.Component {

  constructor(props){
        super(props)
        let initialValue = this.props.value
        this.state = {value: initialValue}
        this.handleChange = this.handleChange.bind(this)
  } 
    
  handleChange(value){
    this.setState({
      value: value
    })
  };
  
  render() {
    return (
    <div>
        <div className="col-sm-6">
            <div className="col-sm-2"></div>
            <div className="col-sm-10 navigationSubTitleText">
              <p><h5 className="select_text">{this.props.title}</h5></p>
            </div>
        </div>
        <div className="col-sm-6">
            <Slider style={{backgroundColor: "white"}}
              min={this.props.min}
              max={this.props.max}
              value={this.state.value}
              onChange={this.handleChange}
            />
        </div>
    </div>
    );
  }
}
