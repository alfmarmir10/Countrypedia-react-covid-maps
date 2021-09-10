import React from 'react';
import NavBarTop from '../Components/NavBarTop';
import HandleRenderer from '../Components/HandleRenderer';
import '../Styles/styles_base.css';

function Home() {
  return (
    <div>
      <NavBarTop home="active"/>
      <div className="flex-row-center flex-wrap margin-top-sm overflow-y-auto all-flags-container">
        <HandleRenderer searching="all"/>
      </div>
    </div>
  )
}

export default Home;
