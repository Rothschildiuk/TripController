import React, {useEffect, useState} from 'react'
import './App.css'
import RightArea from './RightArea'
import axios from 'axios'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import AddNewDate from './AddNewDate'
import Typography from '@material-ui/core/Typography'
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined'
import IconButton from '@material-ui/core/IconButton'

const WorkingArea = () => {

    const [upcomingTravels, setUpcomingTravels] = useState([])
    const [selectedTravelId, setSelectedTravelId] = useState(0)

    function delTravelWithId(id) {
        axios.get('/api/delTravelWithId?id=' + id)
            .then(getUpcomingTravels)
    }

    function getUpcomingTravels() {
        axios.get('/api/getUpcomingTravels')
            .then(resp => setUpcomingTravels(resp.data))
    }


    useEffect(() => {
            getUpcomingTravels()
        }, [] //todo add upcomingTravels (updateble)
    )

    return <div className='WorkingArea'>
        <div className='LeftArea'>
            <Typography variant='h6' align='center'>
                TravelsList
            </Typography>
            <List>
                {upcomingTravels.map((item, index) =>
                    <ListItem key={index} button selected={selectedTravelId === item.id}>
                        <ListItemText inset primary={item.date} onClick={() => setSelectedTravelId(item.id)}/>

                        <IconButton aria-label='Delete' onClick={() => delTravelWithId(item.id)}>
                            <DeleteOutlinedIcon/>
                        </IconButton>
                    </ListItem>)
                }
            </List>
            <AddNewDate getUpcomingTravels={getUpcomingTravels}/>
        </div>


        <RightArea selectedTravelId={selectedTravelId}/>
    </div>


}

export default WorkingArea
