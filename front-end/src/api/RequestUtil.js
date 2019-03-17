export default class RequestUtil {

    // http://localhost:8080/api/add/?name=oleh&surName=baidiuk&phoneNumber=0977777777&address=Rauscherstrasse&comment=comentar4uk
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
}