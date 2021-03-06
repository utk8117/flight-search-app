import { useEffect, useState } from 'react';
import './App.css';
import LeftSearch from './components/LeftSearchComponent';
import axios from "axios";
import moment from 'moment';
import RightWrapper from './components/RightWrapperComponent';

function App() {
  const [searchData, setSearchData] = useState(null);
  const [flightData, setFlightData] = useState([]);
  const [error, setError] = useState(false);
  const [valid, setValid] = useState(true);
  const [returnFlight, setReturnFlight] = useState([]);
  const [priceRange, setPriceRange] = useState(0);
  const [flightResponse, setFlightResponse] = useState([]);

  const onSearchClick = (data) => {
    if (data.originCity && data.destinationCity && data.departureDate && data.passengers) {
      if (data.isOneWay) {
        setSearchData(data);
        setValid(true);
      }
      else if(data.returnDate){
        setSearchData(data);
        setValid(true);
      }
      else {
        setValid(false);
      }
    }
    else {
      setValid(false);
    }
    setPriceRange(0);
  }

  useEffect(() => {
    if (priceRange > 10) {
        let data = flightResponse.filter(value => {
          if (value.origin === searchData.originCity &&
            value.destination === searchData.destinationCity &&
            moment(moment(value.date).format("L")).isSame(moment(searchData.departureDate).format("L")) && value.price <= priceRange) {
            return value
          }
        })
      setFlightData(data);
      if (!searchData.isOneWay) {
        let dataReturn = flightResponse.filter(value => {
          if (value.destination === searchData.originCity &&
            value.origin === searchData.destinationCity &&
            moment(moment(value.date).format("L")).isSame(moment(searchData.departureDate).format("L")) &&
            value.price <= priceRange) {
            return value
          }
        })
        setReturnFlight(dataReturn);
      }
    }
  }, [priceRange])
  
  useEffect(() => {
    if (searchData) {
      if (flightResponse.length > 0) {
        filterFlightData(flightResponse);
      }
      else {
        axios.get('https://tw-frontenders.firebaseio.com/advFlightSearch.json')
        .then((resp) => {
          console.log(resp.data)
          setFlightResponse(resp.data);
          filterFlightData(resp.data);
          })
        .catch((error) => {
          if (error) {
            setError(true);
        }
      })
      }
    }
  }, [searchData])

  const filterFlightData = (filterData) => {
    if (filterData.length > 0) {
      let data = [];
        data = filterData.filter(value => {
          if (value.origin === searchData.originCity &&
            value.destination === searchData.destinationCity &&
            moment(moment(value.date).format("L")).isSame(moment(searchData.departureDate).format("L"))) {
            return value
          }
          })
            setFlightData(data)
        if (!searchData.isOneWay) {
          let dataLeft = filterData.filter(value => {
            if (value.destination === searchData.originCity &&
              value.origin === searchData.destinationCity &&
              moment(moment(value.date).format("L")).isSame(moment(searchData.returnDate).format("L"))) {
              return value
            }
          })
          setReturnFlight(dataLeft)
        }
    }
  }

  return (
    <div className="App">
      <div className="title">
        <h2>Flight Search App</h2>
      </div>
      <div className="body-wrapper row">
        <div className="outer-left-wrapper col-md-3">
          <LeftSearch onSearchClick={onSearchClick} price={priceRange} setPrice={setPriceRange} />
          <div>{ !valid ? <p className='invalid-input'>Please enter valid input</p>:null}</div>
        </div>
        
        <div className="outer-right-wrapper col-md-9">
          {
            searchData != null && !error ? 
              <div className='row'>
                <div className={!searchData.isOneWay ?'col-md-6' : 'col-md-12'}>
                  <RightWrapper flightData={flightData}
                    searchData={searchData}
                    origin={searchData.originCity}
                    destination={searchData.destinationCity} />
                </div>
                {!searchData.isOneWay ?
                  <div className='col-md-6'>
                    <RightWrapper flightData={returnFlight}
                      searchData={searchData}
                      origin={searchData.destinationCity}
                      destination={searchData.originCity}
                    />
                </div> : null}
              </div>
             : <h5>Where are you heading?</h5>
          }
        
        </div>
      </div>
      
    </div>
  );
}

export default App;
