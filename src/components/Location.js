import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import marker from '../assets/Images/location-icon.png';


const Location = (props) => {
    const data = [
        {
            "featureType": "all",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "lightness": "-100"
                },
                {
                    "color": "#ffdac9"
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "visibility": "on"
                },
                {
                    "color": "#ffcab1"
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "labels",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "poi.park",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#ffcab1"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "geometry",
            "stylers": [
                {
                    "lightness": 100
                },
                {
                    "visibility": "simplified"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "labels",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "transit.line",
            "elementType": "geometry",
            "stylers": [
                {
                    "visibility": "on"
                },
                {
                    "lightness": 700
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "all",
            "stylers": [
                {
                    "color": "#92e1dd"
                }
            ]
        }
    ];

    const mapStyles = {
        width: '100%',
        height: '100%'
    };

    const customMarkerIcon = {
        url: marker,
        scaledSize: new props.google.maps.Size(42, 67), // Adjust the size as needed
    };

    return (
        <div className='locationMain'>
            <Map
                google={props.google}
                zoom={15}
                style={mapStyles}
                initialCenter={{ lat: 51.51245880126953, lng: -0.1268070489168167 }}
                styles={data}
            >
                <Marker
                    position={{ lat: 51.51245880126953, lng: -0.1268070489168167 }}
                    name={'Example Marker'}
                    className="custom-marker"
                    icon={customMarkerIcon} // Set custom icon
                />
            </Map>
            <div className='locationText'>
                <h2>LOCATION</h2>
                <p>12 Upper St. Martin's Lane WC2H 9FB, London</p>
            </div>
        </div>
    );
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyDg56vlRNuH65ewtKcmnE66YJwSQwwgY7w'
})(Location);