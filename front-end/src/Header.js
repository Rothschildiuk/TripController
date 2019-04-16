import React, {useState} from 'react'
import {AppBar, Toolbar, Typography, Button} from '@material-ui/core'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogActions from '@material-ui/core/DialogActions'

const Header = () => {

    const [open, setOpen] = useState(false)

    function openLogin() {
        setOpen(!open)
    }

    return <div className='Header'>
        <AppBar position='static'>
            <Toolbar className='Toolbar'>
                <Typography variant='h6' color='inherit'>
                    TripController
                </Typography>
                <Button color='inherit' onClick={() => openLogin()}>Login</Button>


                <Dialog open={open}>
                    <DialogTitle id="customized-dialog-title" onClose={openLogin}>
                        LoggIn
                    </DialogTitle>

                    <DialogActions>
                        <Button onClick={openLogin} color="primary">
                            Close
                        </Button>
                    </DialogActions>
                </Dialog>
            </Toolbar>
        </AppBar>
    </div>


};

export default Header
