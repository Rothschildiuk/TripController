import React from 'react';
import './App.css';
import AddNewDate from "./AddNewDate";
import AddPassenger from "./AddPassenger";
import PastTravelsList from "./PastTravelsList";
import UpcomingTravelsList from "./UpcomingTravelsList";
import AppBar from './AppBar'

const App = () => {



    return (
        <div className="App">
            <AppBar/>
            <AddPassenger/>
            <AddNewDate/>

            <PastTravelsList/>
            <UpcomingTravelsList/>

        </div>
    );

};

export default App;
