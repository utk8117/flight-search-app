import DatePickerComponent from "./DatePicker";
import Search from "./SearchComponent";
import DropDownComponent from "./DropDownComponent";
import { useState } from "react";

const ReturnTabContent = ({onSearchClick}) => {
    const [searchData, setSearchData] = useState({
        originCity: '',
        destinationCity: '',
        departureDate: '',
        returnDate:'',
        passengers: 1
    })
    const handleChange = (value, id) => {
        let data = { ...searchData };
        data[id] = value;
        setSearchData(data);
    }
    return (
        <div className="one-way-outer-wrapper">
            <Search placeholder={"Enter Origin City"}
                id="originCity"
                onSearch={(e) => { handleChange(e.target.value,e.target.id) }} />
            <Search placeholder={"Enter Destination City"}
                id="destinationCity"
                onSearch={(e) => { handleChange(e.target.value, e.target.id)}} />
            <DatePickerComponent placeholder={'Departure date'}
                id="departureDate"
                onDateSelect={(e) => handleChange(e.target.value, e.target.id)} />
            <DatePickerComponent placeholder={'Return date'}
                id="returnDate"
                onDateSelect={(e) => handleChange(e.target.value, e.target.id)} />
            <DropDownComponent name='passengers'
                id='passengers'
                dropDownSelect={(e)=>{handleChange(parseInt(e.target.value,10),e.target.id)}}
                options={[{ id: 1, value: 1 }, { id: 2, value: 2 }, { id: 3, value: 3}]}
                labelText='Selected Passengers: ' />
            <button type="button"
                className="btn btn-primary"
                onClick={() => onSearchClick(searchData)}
            >Search</button>
        </div>
    );
}

export default ReturnTabContent;