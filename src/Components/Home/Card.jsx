import React from 'react';
import '../../Styles/styles_base.css';
import '../../Styles/Home/home_styles.css';
import { Link } from 'react-router-dom';

function Card(props) {
  const { url, name } = props;
  return (
    <div className="card card-item">
      <img src={url} alt="Country img" className="card-img margin-top-sm"/>
      <p className="font-size-md font-weight-bold text-align-center margin-top-sm">{name}</p>
      {/* <button className="width-80percent border-radious-5px margin-top-sm bg-yellow font-size-md font-weight-bold btn-details" >Details</button> */}
      <Link className="width-80percent border-radious-5px margin-top-sm bg-yellow font-size-md font-weight-bold btn-details" to={{
          pathname: `/Details/${name}`
        }}
      >Detalles</Link>
    </div>
  )
}

export default Card;
