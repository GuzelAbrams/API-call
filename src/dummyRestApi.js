const request = require('request-promise');

const DUMMY_HOST = 'http://dummy.restapiexample.com';
const DUMMY_KEY = '56df617385fa8d00b43abff5eb333098a1cf0e591e2710d7676a94fa97c7603a'



class UsersAPI {
    constructor (){
        this.host = DUMMY_HOST;
        


        this.request = request.defaults({
            json: true,
            headers: {

                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": `Bearer${DUMMY_KEY}`
     }
        })
    }

    getEmployeesList(){

        const path = 'api/v1/employees'

        return this.request.get({
            url: `${this.host}${path}`
        })
     }

     createEmployee(body){

        const path = 'api/v1/create'

        return this.request.post({
            url: `${this.host}${path}`,
            body:body
        })
    }

    updateEmployee(userID, body){

        const path = `api/v1/update/${userID}`   

        return this.request.post({
            url: `${this.host}${path}`,
            body:body
        })
    }

    deleteEmployee(userID){

        const path = `api/v1/delete/${userID}`   

        return this.request.post({
            url: `${this.host}${path}`,
            body:body
        })
    }
}

module.exports = UsersAPI;