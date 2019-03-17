import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>add new contact to DB</h1>

          <form>
            <label>
              Name:
              <input type="text" name="name" />
            </label>
            <br/>
            <label>
              Surname:
              <input type="text" name="surname" />
            </label>
            <br/>
            <label>
              PhoneNumber:
              <input type="text" name="phoneNumber" />
            </label>
            <br/>
            <label>
              Address:
              <input type="text" name="address" />
            </label>
            <br/>
            <label>
              Comment:
              <input type="text" name="comment" />
            </label>
            <br/>
            <input type="submit" value="Submit" />
          </form>
        </header>
      </div>
    );
  }
}

export default App;
