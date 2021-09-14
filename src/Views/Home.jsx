import React, { useEffect, useRef } from 'react';
import NavBarTop from '../Components/NavBarTop';
import HandleRenderer from '../Components/HandleRenderer';
import '../Styles/styles_base.css';

function Home() {
  const rendererRef = useRef();

  useEffect(() =>{
    console.log(rendererRef.current.getBoundingClientRect());
  }, [])

  return (
    <div>
      <NavBarTop home="active"/>
      <div ref={rendererRef} className="flex-row-center flex-wrap margin-top-sm overflow-y-auto all-flags-container">
        <HandleRenderer searching="all"/>
      </div>
    </div>
  )
}

export default Home;
