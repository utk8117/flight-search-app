import "../styles/FlightListComponent.css"

const FlightListComponent = ({flightData}) => {
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
                    2hrs
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