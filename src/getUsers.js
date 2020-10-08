const request = require('request-promise');
//URL https://api.github.com/users/GuzelAbrams

const HOST = "https://api.github.com";



class Api {
    construction (host = HOST){
        this.host = host;
        
        this.request = request.defaults({
            json: true,
            header: {
                "Content - Type" : 'application/json'
            },
            rejectUnauthorized: false

        });
    }

getUser(GuzelAbrams){ //Is correct user ID???
    const path = '/users/${GuzelAbrams}';

    return this.request.get({
        url: `${this.host}$path`
    })

}
}

module.exports = Api;