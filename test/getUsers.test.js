const Api = require('../src/getUsers')
const {expect} = require ('chai');

describe("Github API", async() => {

    let api;
    before(async() => {
        api = new Api();
    })


    it("It can get users information", async () =>{

       

        const response = await api.getUser();
        console.log (response);

    })

})