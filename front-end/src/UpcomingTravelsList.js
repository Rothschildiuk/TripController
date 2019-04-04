import React from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import 'typeface-roboto'
import Typography from '@material-ui/core/Typography'
import AddNewDate from './AddNewDate'


const UpcomingTravelsList = (props) => {


    return <div className='UpcomingTravelsList'>

        <Typography variant='h4' align='center'>Actual travels</Typography>
        <List>
            {props.travels.map((item, index) =>
                <ListItem key={index} button>
                <ListItemText primary={item.date}/>
            </ListItem>)
            }
        </List>
        <AddNewDate/>

    </div>

}

export default UpcomingTravelsList
