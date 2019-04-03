import React, {useEffect, useState} from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import axios from 'axios'


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
        <div className="UpcomingTravelsList">
            <h5>UpcomingTravelsList</h5>

            <List>
                {upcomingTravels.map((item, index) =>
                    <ListItem key={index} button>
                        <ListItemText primary={item.date}/>
                    </ListItem>)
                }


            </List>
        </div>
    )
}

export default UpcomingTravelsList;
