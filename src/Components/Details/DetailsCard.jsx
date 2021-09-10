import React, { useEffect, useState } from 'react'
import Map from './Map';
import Chart from './Chart';

function DetailsCard(props) {
  const {info, covid} = props;
  const [covidLastUpdated, setCovidLastUpdated] = useState(null);
  const [covidItem, setCovidItem] = useState([]);
  const [covidStats, setCovidStats] = useState([]);

  const URL_COVID_STATS = `https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/stats?country=${info.name}`;
  
  useEffect(() => {
    function getCovidItem(){
      try {
        for (let i = 0; i < covid.features.length; i++) {
          if(covid.features[i]["attributes"]["ISO3"] === info.alpha3Code){
            setCovidItem(covid.features[i]);
            const date = new Date(covid.features[i].attributes.Last_Update);
            setCovidLastUpdated(date.toString());
          }
        }
      } catch (error) {
        
      }
    }
    getCovidItem();
    return () => {
      getCovidItem();
    }
  }, [covid, info.alpha3Code])

  useEffect(() => {
    async function get_Covid_Stats () {
      const response = await fetch(URL_COVID_STATS, {
        "method": "GET",
        "headers": {
          "x-rapidapi-host": "covid-19-coronavirus-statistics.p.rapidapi.com",
          "x-rapidapi-key": "693293c7a4msh2c6659da5673d1fp189cb2jsn0b156a7f446b"
        }
      });
      const responseObj = await response.json();
      if(responseObj["message"].indexOf("Country not found")>=0){
        setCovidStats(undefined);
      } else {
        setCovidStats(responseObj);
      }
    }
    get_Covid_Stats();
    return () => {
      get_Covid_Stats();
    }
  }, [info, URL_COVID_STATS])

  console.log(info);

  return (
    <div className='flex-column-start detailsCard-main-container'>
      <div className="flex-row-center flex-wrap">
        <img src={info.flag} alt="Country Flag" className='detailsCard-img'/>
        <div className="info-container flex-column-center margin-top-sm">
          <p className="detailsCard-title font-weight-bold font-size-lg">{info.name}</p>
          <p className="detailsCard-subtitle font-size-md" name="detailsCard-subtitle">{info.capital}</p>
          <label htmlFor="detailsCard-subtitle" className="detailsCard-subtitle-label font-weight-bold">Capital</label>
          <div className="covid-info-container flex-column-center margin-top-sm">
            <p className="width-100percent bg-crimson color-white text-align-center font-size-md font-weight-bold covid-info-title">Covid-19 review</p>
            <div className="covid-items-container flex-row-space-around">
              <div className="covid-item flex-column-center">
                <p id="covid-deaths" className="font-size-md">{(covidItem["attributes"] === undefined) ? 0 : covidItem["attributes"]["Deaths"]}</p>
                <label htmlFor="covid-deaths" className="font-weight-bold">Deaths</label>
              </div>
              <div className="covid-item flex-column-center">
                <p id="covid-Confirmed" className="font-size-md">{(covidItem["attributes"] === undefined) ? 0 : covidItem["attributes"]["Confirmed"]}</p>
                <label htmlFor="covid-Confirmed" className="font-weight-bold">Confirmed</label>
              </div>
              <div className="covid-item flex-column-center">
                <p id="covid-Mortality_Rate" className="font-size-md">{(covidItem["attributes"] === undefined) ? 0 : `${covidItem["attributes"]["Mortality_Rate"].toFixed(1)}%`}</p>
                <label htmlFor="covid-Mortality_Rate" className="font-weight-bold">% Mortality</label>
              </div>
            </div>
          </div>
            <p className="font-weight-thin margin-top-sm lastUpdate-date">{(covidLastUpdated === undefined) ? 0 : covidLastUpdated}</p>
        </div>
        {
          covidStats!==undefined ? (
            <Chart stats={covidStats}/>
          ) : (
            <div></div>
          )
        }
        {
          covidItem["geometry"]!==undefined ? (
            <Map lat={covidItem["geometry"]["y"]} lng={covidItem["geometry"]["x"]} name={info.name} flag={info.flag}/>
          ) : (
            <div></div>
          )
        }
      </div>
    </div>
  )
}

export default DetailsCard
