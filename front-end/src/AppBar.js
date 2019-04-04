import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'



function ButtonAppBar() {
    return (
        <div >
            <AppBar position='absolute'>
                <Toolbar>
                    <Typography variant='h6' color='inherit' >
                        Trip Controller
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}



export default ButtonAppBar