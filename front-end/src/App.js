import React from 'react';
import './App.css';
import AddNewContact from "./AddNewContact";
import AddNewDate from "./AddNewDate";
import GetAllTravel from "./GetAllTravel";

const App = () => {



    return (
        <div className="App">
            <h1>App</h1>
            <AddNewContact/>
            <AddNewDate/>
            <GetAllTravel/>

        </div>
    );

};

export default App;
