import React, {useEffect, useState} from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import axios from 'axios'
import 'typeface-roboto'
import AddNewDate from './AddNewDate'
import Typography from '@material-ui/core/Typography'


const UpcomingTravelsList = () => {

    const [upcomingTravels, setUpcomingTravels] = useState([]);

    useEffect(
        () => {

            const url = '/api/getUpcomingTravels'
            axios.get(url)
                .then(resp => setUpcomingTravels(resp.data))

        }, []
    )

    return (
        <div className='UpcomingTravelsList'>
            <Typography variant='h4' align='center' >
                Actual travels
            </Typography>
            <List>
                {upcomingTravels.map((item, index) =>
                    <ListItem key={index} button>
                        <ListItemText primary={item.date}/>
                    </ListItem>)
                }
            </List>



            <AddNewDate/>
        </div>
    )
}

export default UpcomingTravelsList
