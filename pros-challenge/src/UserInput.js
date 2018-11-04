import React, { Component } from 'react';
import Geo from './Geo'
import axios from './../node_modules/axios'

class UserInput extends React.Component {
    constructor(props) {
      super(props);
      this.state = {departureFrom: '', arrivalTo: '', date: ''};
  
      this.handleFromChange = this.handleFromChange.bind(this);
      this.handleToChange = this.handleToChange.bind(this);
      this.handleDateChange = this.handleDateChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleClickFromChange = this.handleClickFromChange.bind(this);
      this.handleClickToChange = this.handleClickToChange.bind(this);
    }
  
    handleFromChange(event) {
      this.setState({departureFrom: event.target.value});
    }

    handleToChange(event) {
      this.setState({arrivalTo: event.target.value});
    }

    handleDateChange(event) {
      this.setState({date: event.target.value})
    }
  
    handleSubmit(event) {
      // console.log(this.props.airport)
      // console.log(this.props.airport)
       var invocation = new XMLHttpRequest();
       var url = 'https://www.google.fr/flights#flt=/m/03l2n./m/02_286.2018-11-28;c:USD;e:1;sd:1;t:f;tt:o';
      //  invocation.open('GET', url, true);
      //  console.log(invocation)
      fetch(url)
      .then(response => response.json())
      .then(parsedJSON => console.log(parsedJSON.results))
      .catch(error => console.log('parsing failed', error))

      //    axios.get('https://www.google.fr/flights#flt=/m/03l2n./m/02_286.2018-11-28;c:USD;e:1;sd:1;t:f;tt:o').then((info) => {
      //        console.log(info);
      //      }).catch(function(error) {
      //   console.error(error)
      // });
      // axios.get("https://www.google.fr/flights#flt=/m/03l2n./m/02_286.2018-11-28;c:USD;e:1;sd:1;t:f;tt:o").then((info) => {
      //   console.log(info);
      // })
      console.log(this.state.departureFrom, this.state.arrivalTo, this.state.date)
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
        </form>
      );
    }
  }

  export default UserInput;