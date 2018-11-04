import React, { Component } from 'react';
import './App.css';
import { InstantSearch, Configure, SearchBox } from 'react-instantsearch-dom'
import { GoogleMapsLoader } from 'react-instantsearch-dom-maps'
import Geo from './Geo'
import UserInput from './UserInput'
  

class App extends Component {


  render() {
    return (
      <InstantSearch
        appId="B1G2GM9NG0"
        apiKey="aadef574be1f9252bb48d4ea09b5cfe5"
        indexName="demo_geo"
      >
       <Configure
          hitsPerPage={6}
          getRankingInfo
          aroundLatLngViaIP
          typoTolerance="min"
        />
        <div id = "head">
        <header> Minimialized Costs </header>
        </div>
        <div id="searchbox">
              {/* Uncomment the following widget to add a search bar */}
              {<SearchBox
                translations={{
                  placeholder: 'Search airports by name, city, airport code'
                }}
              /> }
            </div>
        <main className="search-container">
        <div className="right-panel">
         <div id="map">
            <br/>
            {<div style={{ height: '100%' }}>
              <GoogleMapsLoader apiKey="AIzaSyBawL8VbstJDdU5397SUX7pEt9DslAwWgQ">
                {google => <Geo google={google} />}
              </GoogleMapsLoader>
            </div> }
          </div>
          </div>
     </main> 
     <div id ="search">
     <UserInput/>
     </div>


      </InstantSearch>
    );
  }
}

export default App;
