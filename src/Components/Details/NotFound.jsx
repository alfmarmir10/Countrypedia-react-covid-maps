import React, { button } from 'react';
import { Link } from 'react-router-dom';
import NotFoundImg from '../../Assets/Img/not-found.svg';
import { useHistory } from 'react-router-dom';
import '../../Styles/Details/details_styles.css';

function NotFound(props) {
  const history = useHistory();
  const {searching} = props;

  const goBack = () => {
    history.goBack()
  }

  return (
    <div className='flex-column-center'>
      <p className='font-size-lg font-weight-bold'>{searching} was not found</p>
      <img src={NotFoundImg} alt="Not Found" className="notFound-img margin-top-md"/>
      <button onClick={goBack} className="tryAgain-button width-80percent bg-yellow font-size-md font-weight-bold margin-top-md">Try Again</button>
    </div>
  )
}

export default NotFound
