import React, {useEffect, useState} from 'react'
import './App.css'
import UpcomingTravelsList from './UpcomingTravelsList'
import AddPassenger from './AddPassenger'
import axios from 'axios'

const WorkingArea = () => {

    const [upcomingTravels, setUpcomingTravels] = useState([])
    const url = '/api/getUpcomingTravels'


    useEffect(() => {
            axios.get(url)
                .then(resp => setUpcomingTravels(resp.data))
        }, [] //todo add upcomingTravels (updateble)
    )
    return <div className='WorkingArea'>
        {upcomingTravels.length !== 0 && <UpcomingTravelsList travels={upcomingTravels}/>}


        <AddPassenger/>
    </div>


}

export default WorkingArea
