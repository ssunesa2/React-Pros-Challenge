import React, { Component } from 'react';
import Geo from './Geo'
import axios from './../node_modules/axios'
import { csv } from 'd3-request';
import url from './flights.csv';

import ReactDOM from 'react-dom';
import TextFileReader from './TextFileReader'

var myTxt = require("./flights.txt");


const $ = window.$;
class UserInput extends React.Component {
    constructor(props) {
      super(props);
      this.state = {departureFrom: '', arrivalTo: '', date: '', isHidden : true};
  
      this.handleFromChange = this.handleFromChange.bind(this);
      this.handleToChange = this.handleToChange.bind(this);
      this.handleDateChange = this.handleDateChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleClickFromChange = this.handleClickFromChange.bind(this);
      this.handleClickToChange = this.handleClickToChange.bind(this);
      
    }
    toggleHidden () {
      this.setState({
        isHidden: !this.state.isHidden
      })
    }

    handleFromChange(event) {
      this.setState({departureFrom: event.target.value});
    }

    handleToChange(event) {
      this.setState({arrivalTo: event.target.value});
    }

    handleDateChange(event) {
      this.setState({date: event.target.value});
    }
  




    handleSubmit(event) {
      this.setState({handleSubmit: event.target.value});
      this.toggleHidden();

      //console.out(this.readTextFile(file))
      
      //var data = $.csv.toObjects(url1);
      //console.log(data);

      // var fs = require('fs');
      // var parse = require('csv-parse');

      // var inputFile='flights.csv';

      // var parser = parse({delimiter: ';'}, function (err, data) {
      // // when all countries are available,then process them
      // // note: array element at index 0 contains the row of headers that we should skip
      // data.forEach(function(line) {
      //   // create country object out of parsed fields
      //   console.log(line);
      //   var country = { "Time" : line[0]
      //                 , "Airline" : line[1]
      //                 , "Duration" : line[2]
      //                 , "Airports" : line[4]
      //                 , "Cost" : line[5]
      //                 };
      //   console.log(JSON.stringify(country));
      // });    
      // });
 
// read the inputFile, feed the contents to the parser
  //fs.createReadStream(inputFile).pipe(parser);

      // let axios = require('axios');
      // let cheerio = require('cheerio');
      // axios.get(`https://www.google.fr/flights#flt=/m/03l2n./m/02_286.2018-11-28;c:USD;e:1;sd:1;t:f;tt:o`)
      // .then(res => {
      //   //const posts = res.data.data.children.map(obj => obj.data);
      //   console.log(document.getElementsByClass("gws-flights-results__best-flights"))

      //   const test = cheerio.load(res.data);

      //   console.log(test.text());
      // });
      // var webdriver = require("selenium-webdriver")

      // var caps = {
      //   'name': 'test',
      //   'browserName':'Google Chrome'
      // }

      // var cbtHub = "http://localhost:3000/"
      // var driver = new webdriver.Builder()
      //   .usingServer(cbtHub)
      //   .withCapabilities(caps)
      //   .build();

      // driver.get(`https://www.google.fr/flights#flt=/m/03l2n./m/02_286.2018-11-28;c:USD;e:1;sd:1;t:f;tt:o`)
      // //driver.wait(1)
      // console.log(driver)
    //   var invocation = new XMLHttpRequest();
    //   var urlLink = 'https://www.google.fr/flights#flt=/m/03l2n./m/02_286.2018-11-28;c:USD;e:1;sd:1;t:f;tt:o';



    //   $(document).ready(function() {
    //     $.ajax({
    //         type: "GET",
    //         url: urlLink,
    //         dataType: "text",
    //         success: function(data) {processData(data);}
    //      });
    // });
    function processData(csv)
    {
      let allTextLines = csv.split('/\r\n|\n')

      for(let i = 0; i < allTextLines.length; i++)
      {
        let row = allTextLines[i].split(",")

        let col =  [];
        let attendeesArray = [];
 
        for(let j = 0; j < row.length; j++)
        {
          col.push(row[j]);
        }

        attendeesArray.push(col);
      }

      

    }


      // console.log(this.props.airport)
      // console.log(this.props.airport)
       
      //  invocation.open('GET', url, true);
      //  console.log(invocation)
      // fetch(url)
      // .then(response => response.json())
      // .then(parsedJSON => console.log(parsedJSON.results))
      // .catch(error => console.log('parsing failed', error))

      //    axios.get('https://www.google.fr/flights#flt=/m/03l2n./m/02_286.2018-11-28;c:USD;e:1;sd:1;t:f;tt:o').then((info) => {
      //        console.log(info);
      //      }).catch(function(error) {
      //   console.error(error)
      // });
      // axios.get("https://www.google.fr/flights#flt=/m/03l2n./m/02_286.2018-11-28;c:USD;e:1;sd:1;t:f;tt:o").then((info) => {
      //   console.log(info);
      // })
      console.log("IMPORTANT", this.state.departureFrom, this.state.arrivalTo, this.state.date)
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
        <br/>
        <div id="solution">
        {!this.state.isHidden && <TextFileReader txt={myTxt}/>}
        </div>
        </form>
        

      );
    }
  }

  export default UserInput;