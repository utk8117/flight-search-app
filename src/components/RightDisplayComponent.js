import { useEffect, useState } from "react";
import FlightListComponent from "./FlightListComponent";

const RightDisplayComponent = ({flightData}) => {
    const [flightFinalData, setFlightFinalData] = useState([]);

    useEffect(() => {
        if (flightData.length > 0) {
            const mapRows = flightData.map((item, index) => {
                return (
                    <div key={index}>
                        <FlightListComponent flightData={item} />
                    </div>);
            })
            setFlightFinalData(mapRows);
        }
    },[flightData])

    return (
        <div className="">
            <div className="right-display-outer-wrapper">
            {
                flightData.length > 0 ? <div>{flightFinalData}</div>: 
                    'No flights found'
            }
            </div>
        </div>
       
    )
}

export default RightDisplayComponent;