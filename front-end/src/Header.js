import React from 'react'
import {AppBar, Toolbar, Typography, Button} from '@material-ui/core'

const Header = () => {

    return <div className='Header'>
        <AppBar position='static'>
            <Toolbar className='Toolbar'>
                <Typography variant='h6' color='inherit'>
                    TripController
                </Typography>
                <Button color='inherit'>Login</Button>
            </Toolbar>
        </AppBar>
    </div>


};

export default Header
