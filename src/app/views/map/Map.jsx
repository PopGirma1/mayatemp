import React from 'react'
import { useState } from 'react'
import { GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow } from 'react-google-maps'

function MapComponent() {

    const [selectedHouse, setSelectedHouse] = useState(null)

    const houses = [
        ["john", "doe", "09000000", "BL-361", 9.00438072367348, 38.780354037806546],
        ["albert", "doe", "09111111", "Ks-564", 9.011129960802846, 38.75711941004583],
        ["jane", "doe", "09222222", "F-670", 8.992663892488347, 38.758384394891024],
        ["chris", "doe", "09333333", "BL-078", 8.991857698531094, 38.79665631183061]
    ]

    return (
        <>
            <GoogleMap
                defaultZoom={12}
                defaultCenter={{ lat: 9.00000, lng: 38.70000 }}
            >
                {
                    houses.map((house) => (
                        <div key={house[0]}>
                            <Marker
                                key={house[0]}
                                position={{ lat: house[4], lng: house[5] }}
                                onClick={() => setSelectedHouse(house)}
                            />
                        </div>
                    ))
                }

                {
                    selectedHouse && (
                        <InfoWindow
                            position={{ lat: selectedHouse[4], lng: selectedHouse[5] }}
                            onCloseClick={() => setSelectedHouse(null)}
                        >
                            <div id="content">
                                <h2>{selectedHouse[0] + ' ' + selectedHouse[1]}</h2>
                                <h3>{selectedHouse[2]}</h3> +
                                <div>
                                    <p><b>House Number : {selectedHouse[3]} </b></p>  +
                                    <p><b>user profile</b>, <a href={`http://localhost:3000/users/${selectedHouse[0]}`} target="_blank">user profile link</a> </p>
                                </div>
                            </div>
                        </InfoWindow>
                    )
                }

            </GoogleMap>
        </>
    )
}

const WrappedMap = withScriptjs(withGoogleMap(MapComponent))

function Map() {
  return (
      <WrappedMap
        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_API_KEY}&map_ids=${process.env.REACT_APP_MAP_ID}`}
        loadingElement={<div style={{ height: '100%' }} />}
        containerElement={<div style={{ height: '100%' }} />}
        mapElement={<div style={{ height: '100%' }} />}
      />
  )
}

export default Map