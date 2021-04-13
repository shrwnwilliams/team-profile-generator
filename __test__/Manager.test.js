const Employee = require("../lib/Employee");
const Manager = require("../lib/Manager");

describe("Employee", () => {
    describe("Manager", () => {
        describe("Initialization", () => {
            it("should create an object with a name, id, email, and office number", () => {
                const billy = new Manager("Billy", 321, "billy.billy@billy.com", 23);

                expect(billy.name).toEqual("Billy");
                expect(billy.id).toEqual(321);
                expect(billy.email).toEqual("billy.billy@billy.com");
                expect(billy.officeNumber).toEqual(23);
            })
        })
    })
})