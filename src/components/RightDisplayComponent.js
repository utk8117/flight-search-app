import axios from "axios";
import { useEffect, useState } from "react";
import FlightListComponent from "./FlightListComponent";

const RightDisplayComponent = () => {
    const [flightData, setFlightData] = useState([]);
    const [flightFinalData, setFlightFinalData] = useState([]);

    useEffect(() => {
        axios.get('https://tw-frontenders.firebaseio.com/advFlightSearch.json')
            .then((resp) => {
                setFlightData(resp.data)
        })
    }, [])

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
        <div className="right-display-outer-wrapper">
            {
                flightData.length > 0 ? <div>{flightFinalData}</div>: 
                    'Loading...'
            }
        </div>
    )
}

export default RightDisplayComponent;