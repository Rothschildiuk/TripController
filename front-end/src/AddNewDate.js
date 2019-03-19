import React, {useState} from 'react';
import RequestUtil from "./api/RequestUtil";

const AddNewDate = () => {
    const [date, setDate] = useState("");



    return (
        <div className="AddNewDate">
            <h1>add new date to DB</h1>

            <label>
                Date:
                <input value={date} onChange={e => setDate(e.target.value)} type="text" name="date"/>
            </label>
            <br/>
            <button type="submit" value="Submit"
                    onClick={() => RequestUtil.addDate(date)}> add new travel date
            </button>

        </div>
    );

};

export default AddNewDate;
