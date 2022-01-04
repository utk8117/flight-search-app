import { useEffect, useState } from 'react';
import '../styles/DropDownStyles.css';

const DropDownComponent = ({ name, options, labelText }) => {
    const [dropDownList, setDropDownList] = useState([]);
    const [selectedValue, setSelectedValue] = useState(options[1].value)
    useEffect(() => {
        let data = [];
        if (options.length) {
            options.map(option => {
                data.push(<option value={option.value} key={option.id}>{option.value}</option>)
            })
            setDropDownList(data);
        }
    },[options])
    return (
        <div className="drop-down-wrapper">
            <label className="drop-down-label">{labelText}</label>
            <select className="drop-down-select" value={selectedValue} onChange={(e) => { setSelectedValue(e.target.value)}}>
                {dropDownList ? dropDownList : null}
           </select>
        </div>
    )
}

export default DropDownComponent;