import React, { useRef, useEffect } from 'react';
import '../../Styles/styles_base.css';
import '../../Styles/Home/home_styles.css';
import { Link } from 'react-router-dom';

function Card(props) {
  // console.log(props);
  const { url, name, handleFetch } = props;
  const lastElementRef = useRef();

  useEffect(() => {
    function handleScroll(){
      if(handleFetch==='Yes' && lastElementRef.current.getBoundingClientRect().y <= window.innerHeight){
        console.log("Se activó");
      }
    }
    handleScroll();
  }, [handleFetch])

  return (
    <div ref={lastElementRef} className="card card-item">
      <img src={url} alt="Country img" className="card-img margin-top-sm"/>
      <p className="font-size-md font-weight-bold text-align-center margin-top-sm">{name.common}</p>
      {/* <button className="width-80percent border-radious-5px margin-top-sm bg-yellow font-size-md font-weight-bold btn-details" >Details</button> */}
      <Link className="width-80percent border-radious-5px margin-top-sm bg-yellow font-size-md font-weight-bold btn-details" to={{
          pathname: `/Details/${name.common}`
        }}
      >Details</Link>
    </div>
  )
}

export default Card;
