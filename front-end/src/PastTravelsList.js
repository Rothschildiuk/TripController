import React, {Component} from 'react';
import RequestUtil from "./api/RequestUtil";

class PastTravelsList extends Component {

    state = {
        travelList: [],

    };

    async componentDidMount() {

        const responce = await RequestUtil.getPastTravels();
        const upcomingTravels = await responce.json();
        this.setState({travelList: upcomingTravels})
    }

    render() {
        return (
            <div className="PastTravelsList">
                <h5>PastTravelsList</h5>
                <table>
                    <tbody>
                    <tr>
                        <th>TravelId</th>
                        <th>Date</th>
                    </tr>
                    {this.state.travelList.map(t =>
                        <tr key = {t.id}>
                            <td>{t.id}</td>
                            <td>{t.date}</td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default PastTravelsList;
