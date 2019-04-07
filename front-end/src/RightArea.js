import React, {useEffect, useState} from 'react'
import './App.css'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import axios from 'axios'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Grid from '@material-ui/core/Grid'
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import IconButton from '@material-ui/core/IconButton'

const RightArea = (props) => {
    const [passengerList, setPassengerList] = useState([])

    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [address, setAddress] = useState('')
    const [comment, setComment] = useState('')
    const [travelId, setTravelId] = useState(0)


    function addPassenger(name, surName, phoneNumber, address, comment, travelId) {
        axios.post('/api/addPassenger', {
            name: name,
            surName: surName,
            phoneNumber: phoneNumber,
            address: address,
            comment: comment,
            travelId: travelId
        })
    }

    function delPassengerWithId(id) {
        axios.get('/api/delPassengerWithId?id=' + id)
            .then(resp => console.log(resp))
    }


    useEffect(() => {
            setTravelId(props.selectedTravelId)
            axios.get('/api/getPassengerWithTravelId?id=' + props.selectedTravelId)
                .then(resp => setPassengerList(resp.data))


        }, [props]
    )

    return <div className='RightArea'>
        <List>
            {passengerList.map((item, index) =>
                <ListItem key={index}>
                    <ListItemText
                        primary={item.name + ' ' +
                        item.surname + ' ' +
                        item.phoneNumber + ' ' +
                        item.address + ' ' +
                        item.address + ' ' +
                        item.comment}/>
                    <IconButton aria-label="Delete">
                        <DeleteOutlinedIcon onClick={() => delPassengerWithId(item.id)}/>
                    </IconButton>
                </ListItem>)
            }
        </List>

        <Typography variant='h6'>
            add new passenger to DB
        </Typography>
        <Grid container className='addPassenger'>
            <Grid container direction="row"
                  justify="center"
                  alignItems="flex-end">
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
            </Grid>

            <Grid container direction="row"
                  justify="center"
                  alignItems="flex-end">

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

            </Grid>
        </Grid>
        <Button variant="contained" color="primary"
                onClick={() => addPassenger(name, surname, phoneNumber, address, comment, travelId)}>
            Submit
        </Button>


    </div>

}

export default RightArea
