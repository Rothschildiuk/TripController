import React, {useState} from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import axios from 'axios'

const AddNewDate = () => {
    const [date, setDate] = useState(new Date().toISOString().slice(0, 10))


    function addTravel(date) {
        axios.post('/api/addTravel', {
            date: date
        })
    }

    return (
        <div className='AddNewDate'>


            <TextField
                label='add new date'
                type='date'
                defaultValue={date}
                onChange={e => setDate(e.target.value)}

            />

            <Button variant='contained' color='primary' onClick={() => addTravel(date)}>
                Submit
            </Button>

        </div>
    )

}

export default AddNewDate;
