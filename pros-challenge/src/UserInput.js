import React, { Component } from 'react';

class UserInput extends React.Component {
    constructor(props) {
      super(props);
      this.state = {departureFrom: 'random', arrivalTo: '', date: ''};
  
      this.handleFromChange = this.handleFromChange.bind(this);
      this.handleToChange = this.handleToChange.bind(this);
      this.handleDateChange = this.handleDateChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
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
      console.log(this.state.departureFrom, this.state.arrivalTo, this.state.date)
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Departure From:
            <input type="text" departureFrom={this.state.departureFrom} onChange={this.handleFromChange} />
             Arrival To:
            <input type="text" arrivalTo={this.state.arrivalTo} onChange={this.handleToChange} />
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

//   <form>
//   <label>
//     <input
//       name="Departure From"
//       type="name"
//       checked={this.state.departureFrom}
//       onChange={this.handleInputChange} />
//   </label>
//   <br />
//   <label>
//     Number of guests:
//     <input
//       name="Arrival To"
//       type="name"
//       value={this.state.arrivalTo}
//       onChange={this.handleInputChange} />
//   </label>
//   <input type="submit" value="Submit" />
// </form>