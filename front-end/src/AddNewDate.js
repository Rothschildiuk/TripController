import React, {useState} from 'react';
import RequestUtil from './api/RequestUtil';
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

const AddNewDate = () => {
    const [date, setDate] = useState(new Date().toISOString().slice(0, 10));


    return (
        <div className='AddNewDate'>


            <TextField
                label='add new date'
                type='date'
                defaultValue={date}
                onChange={e => setDate(e.target.value)}

            />

            <Button variant='contained' color='primary' onClick={() => RequestUtil.addDate(date)}>
                Submit
            </Button>

        </div>
    );

};

export default AddNewDate;
