import React, {useState} from 'react'
import {AppBar, Toolbar, Typography, Button} from '@material-ui/core'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogActions from '@material-ui/core/DialogActions'
import GoogleLogin from 'react-google-login'

const Header = () => {

    const [open, setOpen] = useState(false)


    const responseGoogle = (response) => {
        console.log(response);
        console.log(response.profileObj.googleId)
        console.log(response.profileObj.name)
        console.log(response.profileObj.email)
        console.log(response.profileObj.imageUrl)
    }

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
                <GoogleLogin
                    clientId="499697510229-gra6n5ntbqo8ngp372dtu5dg68qjuc6k.apps.googleusercontent.com"
                    buttonText="Login"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy={'single_host_origin'}
                />

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
