import DatePickerComponent from "./DatePicker";
import Search from "./SearchComponent";
import DropDownComponent from "./DropDownComponent";
import { useEffect, useState } from "react";

const OneWayTabContent = ({onSearchClick}) => {
    const [searchData, setSearchData] = useState({
        originCity: '',
        destinationCity: '',
        departureDate: '',
        passengers: 1
    })
    const handleChange = (value, id) => {
        let data = { ...searchData };
        data[id] = value;
        setSearchData(data);
    }
    useEffect(() => {
        console.log(searchData)
    },[searchData])

    return (
        <div className="one-way-outer-wrapper">
            <Search placeholder={"Enter Origin City"}
                id="originCity"
                onSearch={(e) => { handleChange(e.target.value, e.target.id);  }} />
            <Search placeholder={"Enter Destination City"}
                id="destinationCity"
                onSearch={(e) => { handleChange(e.target.value, e.target.id)}} />
            <DatePickerComponent placeholder={'Departure date'}
                id="departureDate"
                onDateSelect={(e) => handleChange(e.target.value, e.target.id)} />
            <DropDownComponent name='passengers'
                id='passengers'
                dropDownSelect={(e)=>{handleChange(parseInt(e.target.value,10) ,e.target.id)}}
                options={[{ id: 1, value: 1 }, { id: 2, value: 2 }, { id: 3, value: 3}]}
                labelText='Selected Passengers: ' />
            <button type="button"
                className="btn btn-primary"
                onClick={()=>onSearchClick(searchData)}
            >Search</button>
        </div>
    );
}

export default OneWayTabContent;