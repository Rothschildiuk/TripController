export const URL = process.env.NODE_ENV === 'development' ? 'http://localhost:8080' : '';

export default class Request {

    // http://localhost:8080/api/add/?name=oleh&surName=baidiuk&phoneNumber=0977777777&address=Rauscherstrasse&comment=comentar4uk
    static async addUser(name, surName, phoneNumber, address, comment) {
        return await fetch(URL + '/api/add/?name=' + name + '&surName=' +
            surName + '&phoneNumber=' + phoneNumber + '&address=' + address + '&comment=' + comment, {
                method: 'POST',
                credentials: 'include'
            }
        );
    }

}