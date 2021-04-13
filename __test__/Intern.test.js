const Employee = require("../lib/Employee");
const Intern = require("../lib/Intern");

describe("Employee", () => {
    describe("Intern", () => {
        describe("Initialization", () => {
            it("should create an object with a name, id, email, and school if provided arguments", () => {
                const steve = new Intern("steve", 1234, "stevestinks@gmail.com", "Buff State");
    
                expect(steve.name).toEqual("steve");
                expect(steve.id).toEqual(1234);
                expect(steve.email).toEqual("stevestinks@gmail.com")
                expect(steve.school).toEqual("Buff State");
            })
        })
    })
})