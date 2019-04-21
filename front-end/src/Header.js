import React from 'react'
import {AppBar, Toolbar, Typography} from '@material-ui/core'
import GoogleLogin from 'react-google-login'
import axios from 'axios'

const Header = () => {


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
    }


    return <div className='Header'>
        <AppBar position='static'>
            <Toolbar className='Toolbar'>
                <Typography variant='h6' color='inherit'>
                    TripController
                </Typography>
                <GoogleLogin
                    clientId="499697510229-gra6n5ntbqo8ngp372dtu5dg68qjuc6k.apps.googleusercontent.com"
                    buttonText="Login"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy={'single_host_origin'}
                />
            </Toolbar>
        </AppBar>
    </div>


};

export default Header
