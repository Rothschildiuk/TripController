export default class RequestUtil {

    static async addPassenger(name, surName, phoneNumber, address, comment, travelId) {
        const passenger = {name: name, surName: surName, phoneNumber: phoneNumber, address: address, comment: comment, travelId: travelId};


        return await fetch('/api/addPassenger',
            {
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'POST',
                body: JSON.stringify(passenger)
            }
        );

    }
    static async addDate(date) {
        const newDate = {date: date};

            return await fetch('/api/addTravel',
            {
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'POST',
                body: JSON.stringify(newDate)
            }
        );

    }

    static async getAllTravel() {
        return await fetch( '/api/getAllTravels', {
            method: 'GET'
        });
    }

    static async getPastTravels() {
        return await fetch( '/api/getPastTravels', {
            method: 'GET'
        });
    }
}