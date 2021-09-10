import React from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text, flag }) => 

<div className='flex-column-center'>
  <img src={flag} alt="Country Flag" className='map-flag'/>
  <p className="font-weight-bold">{text}</p>
</div>;

function Map(props) {

  const { lat, lng, name, flag } = props;

  const center = {
    lat: Number(lat),
    lng: Number(lng)
  }

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '40vh', width: '100%' }} className="margin-top-md margin-bottom-lg">
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyBq8D2eR-0shTPiOMvhMc0K12l5ct6bvP0' }}
        defaultCenter={center}
        defaultZoom={11}
      >
        <AnyReactComponent
          lat={Number(lat)}
          lng={Number(lng)}
          text={name}
          flag={flag}
        />
      </GoogleMapReact>
    </div>
  )
}

export default Map
