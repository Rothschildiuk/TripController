import React, {useEffect, useState} from 'react'
import './App.css'
import RightArea from './RightArea'
import AddNewDate from './AddNewDate'
import axios from 'axios'
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined'
import {List, ListItem, ListItemText, IconButton} from '@material-ui/core'

const WorkingArea = () => {

    const [upcomingTravels, setUpcomingTravels] = useState([])
    const [selectedTravelId, setSelectedTravelId] = useState(0)

    function delTravelWithId(id) {
        axios.get('/api/delTravelWithId?id=' + id)
            .then(getUpcomingTravels)
    }

    function getUpcomingTravels() {
        axios.get('/api/getUpcomingTravels')
            .then(resp => {
                setUpcomingTravels(resp.data)
                if (resp.data.length !== 0)
                    setSelectedTravelId(resp.data[0].id)
            })
    }


    useEffect(() => {
            getUpcomingTravels()
        }, [] //todo add upcomingTravels (updateble)
    )

    return <div className='WorkingArea'>
        <div className='LeftArea'>
            <List>
                {upcomingTravels.map((item, index) =>
                    <ListItem key={index} button selected={selectedTravelId === item.id} onClick={() => setSelectedTravelId(item.id)}>
                        <ListItemText inset primary={item.date} />

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
