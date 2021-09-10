import React from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text, flag }) => 

<div className='flex-column-center'>
  <img src={flag} alt="Country Flag" className='map-flag'/>
  <p className="font-weight-bold text-align-center">{text}</p>
</div>;

function Map(props) {

  const { lat, lng, name, flag } = props;

  const center = {
    lat: Number(lat),
    lng: Number(lng)
  }

  return (
    // Important! Always set the container height explicitly
    <div className="map-container flex-column-center margin-top-md margin-bottom-lg">
      <p className="width-100percent bg-crimson color-white text-align-center font-size-md font-weight-bold covid-info-title">Location</p>
      <div style={{ height: '40vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyBq8D2eR-0shTPiOMvhMc0K12l5ct6bvP0' }}
          defaultCenter={center}
          defaultZoom={4}
        >
          <AnyReactComponent
            lat={Number(lat)}
            lng={Number(lng)}
            text={name}
            flag={flag}
          />
        </GoogleMapReact>
      </div>
    </div>
  )
}

export default Map
