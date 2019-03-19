import React, {Component} from 'react';
import RequestUtil from "./api/RequestUtil";

class GetAllTravel extends Component {

    state = {
        travelList: [],
        data: [{name: 'Jhon', age: 28, city: 'HO'},
            {name: 'Onhj', age: 82, city: 'HN'},
            {name: 'Nohj', age: 41, city: 'IT'}
        ]
    };

    async componentDidMount() {
        this.state.travelList = RequestUtil.getAllTravel();
    }

    render() {
        return (
            <div className="GetAllTravel">
                <h5>GetAllTravel</h5>
                <div>
                    {this.state.data.map(list => (
                        <div key={list.id}><pre>{JSON.stringify(list, null, 0)}</pre></div>
                    ))}
                </div>
            </div>
        );
    }
}

export default GetAllTravel;
