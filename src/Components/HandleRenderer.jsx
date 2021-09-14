import React, { useState, useEffect } from 'react';
import Card from '../Components/Home/Card';
import Badge from './Search/Badge.jsx';
import DetailsCard from '../Components/Details/DetailsCard';
import NotFound from '../Components/Details/NotFound';

function HandleRenderer(props) {
  const { searching } = props;
  const [data, setData] = useState([]);
  const [dataCovid, setDataCovid] = useState([]);
  const [badges, setBadges] = useState([]);
  const URL = 'https://restcountries.eu/rest/v2/all';
  const URL_COVID = 'https://services1.arcgis.com/0MSEUqKaxRlEPj5g/arcgis/rest/services/ncov_cases2_v1/FeatureServer/2/query?where=1%3D1&outFields=*&outSR=4326&f=json';

  if(data.length === 0){
    fetchAPI();
  }

  async function fetchAPI(){
    let response = await fetch(URL);
    setData(await response.json());
    response = await fetch(URL_COVID);
    setDataCovid(await response.json());
    
  }

  useEffect(() => {
    fetchAPI();
    return(
      fetchAPI()
    )
  }, []);

  useEffect(() => {
    const filterData = [];
    for(let i = 0; i < 5; i++){
      filterData.push(data[Math.floor(Math.random() * data.length)]);
    }
  
    setBadges(filterData);
    // console.log(filterData);
  }, [data])

  let elements;
  if(data.length > 0 && searching === 'all'){

    const filterData = data.splice(0,10);
    // console.log(filterData);
    let i = -1;
    elements = filterData.map((item) => {
      i++;
      if(i === filterData.length-1){
        return <Card name={item.name} url={item.flag} key={filterData.indexOf(item)} handleFetch="Yes" />
      } else {
        return <Card name={item.name} url={item.flag} key={filterData.indexOf(item)} handleFetch="No"/>
      }
    })

  } else if(data.length > 0 && searching === 'random_badges'){

    // console.log(badges);
    try {
      elements = badges.map((item) => {
        return <Badge name={item.name} key={badges.indexOf(item)}/>
      })
    } catch (error) {
      elements = <p>Loading badges</p>
      console.error(error);
    }

  } else if (data.length > 0 && searching !== 'all' && searching !== 'random_badges'){

    let countryInfoObj;
    let itemIndex = -1;
    for(let i = 0; i < data.length; i++){
      if(data[i]['name'] === searching){
        itemIndex = i;
        countryInfoObj = data[i];
      }
    }
    if(itemIndex === -1){
      elements = <NotFound searching={searching}/>
    } else {
      elements = <DetailsCard info={countryInfoObj} covid={dataCovid}/>
    }

  } else if (data.length === 0){
    elements = <h2>No items!</h2>
  }

  
  return elements;
}

export default HandleRenderer;
