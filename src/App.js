import { useEffect, useState } from 'react';
import './App.css';
import LeftSearch from './components/LeftSearchComponent';
import RightDisplayComponent from './components/RightDisplayComponent';
import axios from "axios";

function App() {
  const [searchData, setSearchData] = useState(null);
  const [flightData, setFlightData] = useState([]);
  const [error, setError] = useState(false);

  const onSearchClick = (data) => {
    setSearchData(data);
  }

  useEffect(() => {
    if (searchData) {
      axios.get('https://tw-frontenders.firebaseio.com/advFlightSearch.json')
      .then((resp) => {
        console.log(resp.data)
        let data = resp.data.filter(value => {
          if (value.origin === searchData.originCity && value.destination === searchData.destinationCity) {
            return value
          }
          })
            setFlightData(data)
        })
      .catch((error) => {
        if (error) {
          setError(true);
      }
    })
    }
    
  }, [searchData])

  return (
    <div className="App">
      <div className="title">
        <h2>Flight Search App</h2>
      </div>
      <div className="body-wrapper row">
        <div className="outer-left-wrapper col-md-3">
          <LeftSearch onSearchClick={onSearchClick} />
        </div>
        
        <div className="outer-right-wrapper col-md-9">
          {
            searchData != null && !error ? <div>
              <div className="main-flight-title">
                <h3>
                  {searchData.originCity.toUpperCase()} to {searchData.destinationCity.toUpperCase()}
                </h3>
            <div className="flights-number">
                {flightData.length} flights found      Monday, 30th Sept
            </div>
          </div>
              <RightDisplayComponent flightData={flightData}/>
              </div> : <h5>Where are you heading?</h5>
          }
        
        </div>
      </div>
      
    </div>
  );
}

export default App;
