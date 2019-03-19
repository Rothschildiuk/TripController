export default class RequestUtil {

    static async addContact(name, surName, phoneNumber, address, comment) {
        const contact = {name: name, surName: surName, phoneNumber: phoneNumber, address: address, comment: comment};


        return await fetch('/api/addContact',
            {
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'POST',
                body: JSON.stringify(contact)
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
        return await fetch(URL + 'http://localhost:8080/api/getAllTravel', {
            method: 'GET'
        });
    }
}