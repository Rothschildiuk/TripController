import React from 'react';
import './App.css';
import AddNewDate from "./AddNewDate";
import GetAllTravel from "./GetAllTravel";
import AddPassenger from "./AddPassenger";

const App = () => {



    return (
        <div className="App">
            <h1>App</h1>
            <AddPassenger/>
            <AddNewDate/>
            <GetAllTravel/>

        </div>
    );

};

export default App;
