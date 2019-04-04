import React from 'react'
import './App.css'
import UpcomingTravelsList from './UpcomingTravelsList'
import AddPassenger from './AddPassenger'

const WorkingArea = () => {

    return (

            <div className='WorkingArea'>
                <UpcomingTravelsList/>
                <AddPassenger/>
            </div>
    );

};

export default WorkingArea
