import React, {useState} from 'react'
import {AppBar, Toolbar, Typography, Button} from '@material-ui/core'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogActions from '@material-ui/core/DialogActions'
import GoogleLogin from 'react-google-login'
import axios from 'axios'

const Header = () => {

    const [open, setOpen] = useState(false)

    function addUser(name, surname, email, imageUrl) {
        axios.post('/api/addUser', {
            name: name,
            surname: surname,
            email: email,
            imageUrl: imageUrl
        })
    }


    const responseGoogle = (response) => {

        addUser(response.profileObj.givenName,
            response.profileObj.familyName,
            response.profileObj.email,
            response.profileObj.imageUrl)

        console.log(response);
        console.log(response.profileObj.givenName)
        console.log(response.profileObj.familyName)
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
