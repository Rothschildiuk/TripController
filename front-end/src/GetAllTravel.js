import React, {Component} from 'react';
import RequestUtil from "./api/RequestUtil";

class GetAllTravel extends Component {

    state = {
        travelList: [],

    };

    async componentDidMount() {

        const responce = await RequestUtil.getAllTravel();
        const allTravel = await responce.json();
        console.log(allTravel);
        this.setState({travelList: allTravel})
    }

    render() {
        return (
            <div className="GetAllTravel">
                <h5>GetAllTravel</h5>
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

export default GetAllTravel;
