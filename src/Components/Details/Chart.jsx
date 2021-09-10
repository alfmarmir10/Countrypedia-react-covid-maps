import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';

function Chart(props) {
  const {stats} = props;
  const [data, setData] = useState([]);
  
  useEffect(() => {
    if(stats["data"]!==undefined){
      const statsObj = stats["data"]["covid19Stats"];
      let labelsArray = [], confirmedArray = [], deathsArray = [];
      
      for(let i = 0; i < statsObj.length; i++){
        if(statsObj[i]["province"]===null){
          labelsArray.push(statsObj[i]["country"]);
        } else {
          labelsArray.push(statsObj[i]["province"]);
        }
        confirmedArray.push(statsObj[i]["confirmed"]);
        deathsArray.push(statsObj[i]["deaths"]);
      }

      const data = {
        labels: labelsArray,
        datasets: [
          {
            label: 'Confirmed',
            data: confirmedArray,
            borderWidth: 1,
          },
        ],
      };
      setData(data);
    }
  }, [stats]);
  

const options = {
  mantainAspectRatio : false,
  elements:{
    bar:{
      backgroundColor: 'gold',
      borderColor: 'black'
    }
  }
};

  return (
    <div className="map-container flex-column-center margin-top-md margin-bottom-lg overflow-x-auto">
      <p className="width-100percent bg-crimson color-white text-align-center font-size-md font-weight-bold covid-info-title">Covid-19 details</p>
      {
        data!==undefined ? (
          <Bar data={data} options={options} width={700} height={400}/>
        ) : (
          <div></div>
        )
      }
    </div>
  )
}

export default Chart




// const VerticalBar = (props) => (
//   // <div className="map-container flex-column-center margin-top-md margin-bottom-lg">
//   //   <p className="width-100percent bg-crimson color-white text-align-center font-size-md font-weight-bold covid-info-title">Covid-19 by city</p>
//   //   {/* <div className='header'>
//   //     <h1 className='title'>Vertical Bar Chart</h1>
//   //     <div className='links'>
//   //       <a
//   //         className='btn btn-gh'
//   //         href='https://github.com/reactchartjs/react-chartjs-2/blob/master/example/src/charts/VerticalBar.js'
//   //       >
//   //         Github Source
//   //       </a>
//   //     </div>
//   //   </div> */}
//   //   <Bar data={data} options={options} />
//   // </div>
// );

// export default VerticalBar;

