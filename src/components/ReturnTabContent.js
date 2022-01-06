import DatePickerComponent from "./DatePicker";
import SearchComponent from "./SearchComponent";
import DropDownComponent from "./DropDownComponent";
import { useState } from "react";
import '../styles/SearchComponent.css';
import SliderComponent from "./SliderComponent";

const ReturnTabContent = ({ onSearchClick , price, setPrice}) => {
    const options = [
        { value: 'Pune (PNQ)', label: 'Pune (PNQ)' },
        { value: 'Mumbai (BOM)', label: 'Mumbai (BOM)' },
        { value: 'Bengaluru (BLR)', label: 'Bengaluru (BLR)' },
        { value: 'Delhi (DEL)', label: 'Delhi (DEL)'},
    ];
    const [searchData, setSearchData] = useState({
        originCity: '',
        destinationCity: '',
        departureDate: '',
        returnDate: '',
        passengers: 1,
        isOneWay: false,
    });
    const [priceRange, setPriceRange] = useState(price);
    const handleChange = (value, id) => {
        let data = { ...searchData };
        data[id] = value;
        setSearchData(data);
    }
    return (
        <div className="one-way-outer-wrapper">
            <SearchComponent placeholder={"Enter Origin City"}
                options={options}
                id="originCity"
                onSearch={(value) => { handleChange(value, "originCity");  }} />
            <SearchComponent placeholder={"Enter Destination City"}
                options={options}
                id="destinationCity"
                onSearch={(value) => { handleChange(value, "destinationCity")}} />
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
            <div className="price-range-wrapper">
                <p className="price-range-label">Price Range</p>
                    <SliderComponent id='price-range' min='0' max='10000'
                    value={priceRange}
                    onChange={(e) => { setPriceRange(e.target.value); setPrice(e.target.value)}} />
                <p>{priceRange}</p>
            </div>
        </div>
    );
}

export default ReturnTabContent;