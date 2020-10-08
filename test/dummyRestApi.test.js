const Api = require('../src/dummyRestApi')

const {expect} = require ('chai');

describe("GoRest user API", async () =>{
    let api;

    before (async () =>{
        api = new Api();
 })

 
 
 
 describe("GoRest Get  employees list(GET/employee)", async() =>{
     it("Can get a list of employees", async() =>{

        const getEmployeeResponse = await api.getEmployeesList()

     })
 })

 
 
 
 
 describe("GoRest Create employee(POST/create)", async() =>{
     
    const employeeToBeCreated={
        name: "test",
        salary: "123",
        age: "23"
 }
 const employeeCreateResponse = await api.createUser(employeeToBeCreated);
 console.log(employeeToBeCreated);
//add assertions

expect(employeeCreateResponse).to.have.property('code',201)

expect(employeeCreateResponse.data).to.have.property('id').to.be.a('number')

expect(employeeCreateResponse.data).to.have.property('name', employeeToBeCreated.name)

expect(employeeCreateResponse.data).to.have.property('salary', employeeToBeCreated.salary)

expect(employeeCreateResponse.data).to.have.property('age', employeeToBeCreated.age)
})



describe("GoRest update employee(PUT/update/{id})", async () =>{
    it("Can update employee's info by ID", async() =>{

        const employeeToBeCreated={
            name: "test",
            salary: "123",
            age: "23"
     }
     const employeeCreateResponse = await api.createEmployee(employeeToBeCreated);
     console.log(JSON.stringify(employeeCreateResponse, null, 2))

     const employeeToBeUpdated = {

            name: "myNewTest",
            salary: "11111",
            age: "30"
     }
     const updatedEmployeeResponse = await api.updateEmployee(employeeCreateResponse.data.id, employeeToBeUpdated)
     console.log(JSON.stringify(updatedEmployeeResponse, null, 2))
})
})


describe("GoRest delete employee(DELETE/delete/{id})", async () =>{
    it("Can delete employee's info by ID", async() =>{

        const employeeToBeCreated={
            name: "test",
            salary: "123",
            age: "23"
     }
     const employeeCreateResponse = await api.createEmployee(employeeToBeCreated);
     console.log(JSON.stringify(employeeCreateResponse))

     
     const deleteEmployeeResponse = await api.deleteEmployee(employeeCreateResponse.data.id)
     console.log(deleteEmployeeResponse)
})
})


})