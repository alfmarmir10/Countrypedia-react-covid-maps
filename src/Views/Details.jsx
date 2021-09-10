import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import NavBarTop from '../Components/NavBarTop';
import HandleRenderer from '../Components/HandleRenderer';
import '../Styles/Details/details_styles.css';
import '../Styles/styles_base.css';
import Undo from '../Assets/Img/undo.svg';

function Details(props) {
  const history = useHistory();
  
  const goBack = () => {
    history.goBack()
  }

  const { name } = useParams();
  return (
    <div>
      <NavBarTop />
      <div className="details-container flex-column-center position-relative overflow-y-auto">
        <div className="back-container" onClick={goBack}>
          <img src={Undo} alt="Back button img" />
          <p className="font-weight-bold">Back</p>
        </div>
        <HandleRenderer searching={name} />
      </div>
    </div>
  )
}

export default Details;
