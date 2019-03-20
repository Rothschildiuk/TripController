import React from 'react';
import './App.css';
import AddNewDate from "./AddNewDate";
import AddPassenger from "./AddPassenger";
import PastTravelsList from "./PastTravelsList";
import UpcomingTravelsList from "./UpcomingTravelsList";

const App = () => {



    return (
        <div className="App">
            <h1>App</h1>
            <AddPassenger/>
            <AddNewDate/>

            <PastTravelsList/>
            <UpcomingTravelsList/>

        </div>
    );

};

export default App;
