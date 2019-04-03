import React, {useState} from 'react';
import RequestUtil from "./api/RequestUtil";
import Typography from '@material-ui/core/Typography'

const AddNewDate = () => {
    const [date, setDate] = useState("");



    return (
        <div className="AddNewDate">
            <Typography variant='h5'>
                add new date to DB
            </Typography>
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
