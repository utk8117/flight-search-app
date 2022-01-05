import React, { useState } from 'react';
import '../styles/DatePicker.css';

function DatePickerComponent({placeholder, onDateSelect, id}) {
  const [date, setDate] = useState(null)

  return (
    <div className='date-picker-wrapper'>
          <label className='departure-date-label'>{!date ? placeholder : date}</label>
          <input type={'date'} className='date-picker' id={id}
            onChange={(e) => { setDate(e.target.value); onDateSelect(e) }} />
          <label className='date-picker-close' onClick={()=>setDate(null)}>{date?'X':null}</label>
    </div>
  );
}

export default DatePickerComponent;