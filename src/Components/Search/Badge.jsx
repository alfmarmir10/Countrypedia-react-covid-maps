import React from 'react';
import '../../Styles/Search/search_styles.css';
import '../../Styles/styles_base.css';
import {Link} from 'react-router-dom';

function Badge(props) {
  const { name } = props;
  return (
    <Link className="badge font-weight-bold font-size-sm color-white" to={{
        pathname: `/Details/${name.common}`
      }}
    >{name.common}</Link>
  )
}

export default Badge
