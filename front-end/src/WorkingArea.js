import React, {useEffect, useState} from 'react'
import './App.css'
import AddPassenger from './AddPassenger'
import axios from 'axios'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import AddNewDate from './AddNewDate'
import Typography from '@material-ui/core/Typography'

const WorkingArea = () => {

    const [upcomingTravels, setUpcomingTravels] = useState([])
    const [selectedTravelId, setSelectedTravelId] = useState(0)
    const url = '/api/getUpcomingTravels'


    useEffect(() => {
            axios.get(url)
                .then(resp => setUpcomingTravels(resp.data))
        }, [] //todo add upcomingTravels (updateble)
    )
    return <div className='WorkingArea'>
        <div className='LeftArea'>
            <Typography variant='h6' align='center'>
                TravelsList
            </Typography>
            <List>
                {upcomingTravels.map((item, index) =>
                    <ListItem key={index} button>
                        <ListItemText primary={item.date} onClick={() => setSelectedTravelId(item.id)}/>
                    </ListItem>)
                }
            </List>
            <AddNewDate/>
        </div>


        <AddPassenger selectedTravelId={selectedTravelId}/>
    </div>


}

export default WorkingArea
