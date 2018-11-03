import React, { Component } from 'react';
import './App.css';
import { InstantSearch, Configure, SearchBox } from 'react-instantsearch-dom'
import { GoogleMapsLoader } from 'react-instantsearch-dom-maps'
import Geo from './Geo'


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
      <main className="search-container">
          <div className="right-panel">
            <div id="map">
              {/* Uncomment the following widget to add a map */}
              {<div style={{ height: '100%' }}>
                <GoogleMapsLoader apiKey="AIzaSyBawL8VbstJDdU5397SUX7pEt9DslAwWgQ">
                  {google => <Geo google={google} />}
                </GoogleMapsLoader>
              </div> }
            </div>
            </div>
        </main>
      </InstantSearch>
    );
  }
}

export default App;
