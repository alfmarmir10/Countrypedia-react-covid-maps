import React from 'react';
import NotFoundImg from '../Assets/Img/not-found.svg';
import '../Styles/styles.css';

function NotFound(props) {

  return (
    <div className='flex-column-center not-found-component-container'>
      <p className='font-size-lg font-weight-bold'>Page not found!</p>
      <img src={NotFoundImg} alt="Not Found" className="notFound-img margin-top-md"/>
    </div>
  )
}

export default NotFound
