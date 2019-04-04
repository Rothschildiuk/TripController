import React, {useState} from 'react';
import './App.css';
import RequestUtil from './api/RequestUtil';
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

const AddPassenger = () => {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [address, setAddress] = useState('');
    const [comment, setComment] = useState('');
    const [travelId, setTravelId] = useState(0);


    return (
        <div className='AddPassenger'>
            <Typography variant='h4' align='center' >
                add new passenger to DB
            </Typography>

            <TextField
                id="standard-name"
                label="Name"
                value={name}
                onChange={e => setName(e.target.value)}
                margin="normal"
            />


            <TextField
                id="standard-name"
                label="Surname"
                value={surname}
                onChange={e => setSurname(e.target.value)}
                margin="normal"
            />

            <TextField
                id="standard-name"
                label="PhoneNumber"
                value={phoneNumber}
                onChange={e => setPhoneNumber(e.target.value)}
                margin="normal"
            />

            <TextField
                id="standard-name"
                label="Address"
                value={address}
                onChange={e => setAddress(e.target.value)}
                margin="normal"
            />

            <TextField
                id="standard-name"
                label="Comment"
                value={comment}
                onChange={e => setComment(e.target.value)}
                margin="normal"
            />

            <TextField
                id="standard-name"
                label="TravelId"
                value={travelId}
                onChange={e => setTravelId(e.target.value)}
                margin="normal"
            />


            <Button variant="contained" color="primary"  onClick={() => RequestUtil.addPassenger(name, surname, phoneNumber, address, comment, travelId)}>
                Submit
            </Button>


        </div>
    );

};

export default AddPassenger;
