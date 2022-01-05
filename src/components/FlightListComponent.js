import moment from "moment";
import "../styles/FlightListComponent.css"

const FlightListComponent = ({ flightData }) => {
    const arrivalTime = moment(flightData.date + " " +flightData.arrivalTime);
    const departureTime = moment(flightData.date + " " + flightData.departureTime);
    const timeDiffHr = arrivalTime.diff(departureTime, "hours");
    const timeDiffMin = Math.floor(((arrivalTime.diff(departureTime, 'minutes')) % 1440) % 60);
    return (
        <div className="flight-list-wrapper">
            <div className="image-box-wrapper">

            </div>
            <div className="flight-content-wrapper">
                <div className="flight-company">
                    {flightData.name}
                    <div className="flight-info">
                    {flightData.flightNo}
                    </div>
                    
                </div>
                <div className="flight-company">
                    {flightData.departureTime}
                    <div className="flight-info">
                    {flightData.origin}
                    </div>
                </div>
                <div className="flight-company">
                    {flightData.arrivalTime}
                    <div className="flight-info">
                    {flightData.destination}
                    </div>
                </div>
                <div className="flight-company">
                    {timeDiffHr}h {timeDiffMin}m
                    <div className="flight-info">
                    Non stop
                    </div>
                </div>
                <div className="flight-company">
                    &#x20b9;{flightData.price}
                </div>
                <div className="book-button-wrapper">
                <button type="button" className="btn btn-danger">Book</button>
            </div>
            </div>
            
            
        </div>
    );
}

export default FlightListComponent;