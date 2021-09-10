import React, { useState } from 'react';
import NavBarTop from '../Components/NavBarTop';
import '../Styles/Search/search_styles.css';
import '../Styles/styles_base.css';
import HandleRenderer from '../Components/HandleRenderer';
import { Link } from 'react-router-dom';

function Search() {
  const [searchString, setSearchString] = useState();

  function updateSearchString(e){
    setSearchString(e.target.value);
  }

  console.log(searchString);


  return (
    <div>
      <NavBarTop search="active"/>
      <div className="search-input-container flex-column-center">
        <input type="text" name="country_name" id="country_name" placeholder="Ex: Mexico or Antarctica" className="border-radious-10px padding-xs font-size-lg font-weight-bold text-align-center" onChange={updateSearchString} value={searchString}/>
        <label htmlFor="country_name" className="font-weight-bold font-size-lg">Country Name</label>
        <p className="width-80percent text-align-left margin-top-sm font-weight-bold">Checkout this: </p>
        <div className="badges-container flex-row-space-around width-80percent margin-top-sm flex-wrap">
          <HandleRenderer searching="random_badges"/>
        </div>
        <Link className="font-weight-bold font-size-lg color-black width-80percent bg-yellow margin-top-sm search-button" to={{
            pathname: `/Details/${searchString}`
          }}
        >Search</Link>
      </div>
    </div>
  )
}

export default Search;
