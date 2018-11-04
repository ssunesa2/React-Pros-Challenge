import React, { Component } from 'react';
import Geo from './Geo'
import TextFileReader from './TextFileReader'
var myTxt = require("./flights.txt");

var from='',to='',schDate='';
class UserInput extends React.Component {
    constructor(props) {
      super(props);
      this.state = {departureFrom: '', arrivalTo: '', date: '', isHidden: true};
  
      this.handleFromChange = this.handleFromChange.bind(this);
      this.handleToChange = this.handleToChange.bind(this);
      this.handleDateChange = this.handleDateChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleClickFromChange = this.handleClickFromChange.bind(this);
      this.handleClickToChange = this.handleClickToChange.bind(this);
    }
  
    handleFromChange(event) {
      this.setState({departureFrom: event.target.value});
      from=event.target.value;
    }

    handleToChange(event) {
      this.setState({arrivalTo: event.target.value});
      to=event.target.value;
    }

    handleDateChange(event) {
      this.setState({date: event.target.value})
      schDate=event.target.value;
    }

    toggleHidden () {
      this.setState({
        isHidden: !this.state.isHidden
      })
    }

    // writeToFile()
    // {
    //   var fileName = "data.txt"
    //   var txtFile = new File(fileName);
    //   txtFile.write("Testing")
    //   txtFile.msClose();

    //   // var f = "data.txt";



    //   // writeTextFile(f, this.props.departureFrom)
    //   // writeTextFile(f, this.props.arrivalTo)
    //   // writeTextFile(f, this.props.date)


    //   // function writeTextFile(afilename, output)
    //   // {
    //   //   var txtFile = new File(afilename);
    //   //   txtFile.write(output);
    //   //   txtFile.msClose();
    //   // }


    // }
  
    handleSubmit(event) {


      // var f = "data.txt";



      // writeTextFile(f, "this.props.departureFrom")
      // writeTextFile(f, "this.props.arrivalTo")
      // writeTextFile(f, "this.props.date")


      // function writeTextFile(afilename, output)
      // {
      //   var txtFile = new File(["data"], "data.txt", {
      //     type: "text/plain",
      //   });
      //   txtFile.Write(output);
      //   txtFile.msClose();
      // }

      this.toggleHidden();
      console.log("IMPORTANT VARIABLES",this.state.departureFrom,this.state.arrivalTo,this.state.date)
     // console.log(this.state.departureFrom, this.state.arrivalTo, this.state.date)
      event.preventDefault();
    }

    handleChange(info){
      this.setState({departureFrom: info});
      console.log(info);
    }

    handleClickFromChange(name){
      this.setState({departureFrom: this.props.airport});
    }
  
    handleClickToChange(name){
      this.setState({arrivalTo: this.props.airport});
    }
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Departure From:
            <input type="text" placeholder="Airport Code" value={this.state.departureFrom} departureFrom={this.state.departureFrom} onChange={this.handleFromChange} />
            <button onClick = {this.handleClickFromChange}>Select the Above Airport</button>
             Arrival To:
            <input type="text" placeholder="Airport Code" value={this.state.arrivalTo} arrivalTo={this.state.arrivalTo} onChange={this.handleToChange} />
            <button onClick = {this.handleClickToChange}>Select the Above Airport</button>
            <br />
            Trip Date:
            <input type="date" scheduleDate={this.state.scheduleDate} onChange={this.handleDateChange} />
          </label>
          <br/>
          <input type="submit" value="Submit"/>
          <br />
          <div id="solution">
          {!this.state.isHidden && <TextFileReader txt={myTxt}/>}
          </div>
        </form>
      );
    }
  }

  export default UserInput;