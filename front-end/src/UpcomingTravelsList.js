import React, {useEffect, useState} from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import axios from 'axios'
import 'typeface-roboto'
import Typography from '@material-ui/core/Typography'
import AddNewDate from './AddNewDate'


const UpcomingTravelsList = () => {

    const [upcomingTravels, setUpcomingTravels] = useState([0])
    const url = '/api/getUpcomingTravels'

    useEffect(() => {
            axios.get(url)
                .then(resp => setUpcomingTravels(resp.data))
                .catch(err => console.log(err))

        }, [] //todo add upcomingTravels (updateble)
    )


    return (
        <div className='UpcomingTravelsList'>
            <Typography variant='h4' align='center'>
                Actual travels
            </Typography>
            <List>
                {
                    upcomingTravels.map((item, index) =>
                        <ListItem key={index} button >
                            <ListItemText primary={item.date}/>
                        </ListItem>)
                }
            </List>
            <AddNewDate/>

        </div>
    )
}

export default UpcomingTravelsList
