import RightDisplayComponent from './RightDisplayComponent';
import moment from 'moment';

const RightWrapper = ({ flightData, searchData, origin, destination }) => {
    return (
        <div className='right-wrapper'>
              <div className="main-flight-title">
                <h3>
                  {origin.toUpperCase()} to {destination.toUpperCase()}
                </h3>
            <div className="flights-number">
                  {flightData.length} flights found &nbsp; &nbsp;
                  {moment(searchData.departureDate).format("dddd, D MMMM")}
            </div>
          </div>
            <RightDisplayComponent flightData={flightData} searchData={searchData} />
        </div>
    )
}

export default RightWrapper;