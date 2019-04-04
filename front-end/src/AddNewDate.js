import React, {useState} from 'react';
import RequestUtil from "./api/RequestUtil";
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

const AddNewDate = () => {
    const [date, setDate] = useState("");



    return (
        <div className="AddNewDate">

            <TextField
                id="outlined-dense"
                label="Add new date to DB"
                margin="dense"
                variant="outlined"
                onChange={e => setDate(e.target.value)}
            />

            <Button variant="contained" color="primary" onClick={() => RequestUtil.addDate(date)}>
                Submit
            </Button>

        </div>
    );

};

export default AddNewDate;
