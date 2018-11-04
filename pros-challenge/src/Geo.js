import React, { Component } from 'react'
import { GeoSearch, Marker } from 'react-instantsearch-dom-maps'

class Geo extends Component {
  InfoWindow = new this.props.google.maps.InfoWindow()
  
  onClickMarker = ({ hit, marker }) => {
    
    if (this.InfoWindow.getMap()) this.InfoWindow.close()
    this.InfoWindow.setContent(
      `${hit.name} - ${hit.name === hit.city ? '' : `${hit.city}, `}${
        hit.country
      }<br>${hit.nb_airline_liaisons} liaisons <br> USE AIRPORT CODE: ${hit.airport_id}`
    )
    console.log(hit)
    this.handleSelect(hit)
    this.InfoWindow.open(marker.getMap(), marker)
  }

  handleSelect(info){
    console.log(info.airport_id);

    this.props.change(info.airport_id);
  }

  render() {
    const { google } = this.props

    return (
      <GeoSearch
        google={google}
        enableRefine={false}
        streetViewControl={false}
        mapTypeControl={false}
        zoom={4}
        minZoom={3}
        maxZoom={7}
        styles={[
          {
            stylers: [
              {
                hue: '#3596D2'
              }
            ]
          }
        ]}
      >
        {({ hits }) => (
          <div>
            {hits.map(hit => (
              <Marker
                key={hit.objectID}
                hit={hit}
                onClick={({ marker }) => {
                  this.onClickMarker({
                    hit,
                    marker
                  })
                }}
              />
            ))}
          </div>
        )}
      </GeoSearch>
    )
  }
}

export default Geo
