import DatePickerComponent from "./DatePicker";
import Search from "./SearchComponent";
import DropDownComponent from "./DropDownComponent";

const ReturnTabContent = () => {
    return (
        <div className="one-way-outer-wrapper">
            <Search placeholder={"Enter Origin City"} onSearch={() => { }} />
            <Search placeholder={"Enter Destination City"} onSearch={() => { }} />
            <DatePickerComponent placeholder={'Departure date'} />
            <DatePickerComponent placeholder={'Return date'} />
            <DropDownComponent name='passengers'
                options={[{ id: 1, value: 'one' }, { id: 2, value: 'two' }, { id: 3, value: 'three'}]}
                labelText='Selected Passengers: ' />
            <button type="button" className="btn btn-primary">Search</button>
        </div>
    );
}

export default ReturnTabContent;