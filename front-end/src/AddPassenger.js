import React, {useState} from 'react';
import './App.css';
import RequestUtil from "./api/RequestUtil";

const AddPassenger = () => {
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [address, setAddress] = useState("");
    const [comment, setComment] = useState("");
    const [travelId, setTravelId] = useState(0);


    return (
        <div className="AddPassenger">
            <h1>add new passenger to DB</h1>

            <label>
                Name:
                <input value={name} onChange={e => setName(e.target.value)} type="text" name="name"/>
            </label>
            <br/>
            <label>
                Surname:
                <input value={surname} onChange={e => setSurname(e.target.value)} type="text" name="surname"/>
            </label>
            <br/>
            <label>
                PhoneNumber:
                <input value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} type="text"
                       name="phoneNumber"/>
            </label>
            <br/>
            <label>
                Address:
                <input value={address} onChange={e => setAddress(e.target.value)} type="text" name="address"/>
            </label>
            <br/>
            <label>
                Comment:
                <input value={comment} onChange={e => setComment(e.target.value)} type="text" name="comment"/>
            </label>
            <br/>
            <br/>
            <label>
                TravelId:
                <input value={travelId} onChange={e => setTravelId(e.target.value)} type="number" name="travelId"/>
            </label>
            <br/>
            <button type="submit" value="Submit"
                    onClick={() => RequestUtil.addPassenger(name, surname, phoneNumber, address, comment, travelId)}>submit
            </button>

        </div>
    );

};

export default AddPassenger;
