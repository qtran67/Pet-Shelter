const express = require("express");
const app = express();
const PORT = 8000;
const {faker} = require("@faker-js/faker");

const createUser = () => {    
    return (
        {
            _id: faker.datatype.uuid(),
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            phoneNumber: faker.phone.number(),
            email: faker.internet.email(),
            password: faker.internet.password(),
        }
    );
}

const createCompany = () => {    
    return (
        {
            _id: faker.datatype.uuid(),
            name: faker.company.companyName(),
            address:{
                street: faker.address.street(),
                city: faker.address.city(),
                state: faker.address.state(),
                zipcode: faker.address.zipCode(),
                country: faker.address.country()
            }
        }
    );
}

app.use(express.json());

app.get("/api/users/new", (req, res) => {
    const user = createUser();
    res.send(user);
});

app.get("/api/companies/new", (req, res) => {
    const company = createCompany();
    res.send(company);
});

app.get("/api/user/company", (req, res) => {
    const user = createUser();
    const company = createCompany();
    const data = {user: user, company: company}
    res.send(data);
});

const server = app.listen(PORT, () =>
    console.log(`Server is locked and loaded on port ${server.address().port}!`)
);
