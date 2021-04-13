const Employee = require("../lib/Employee")
const Engineer = require("../lib/Engineer");

describe("Employee", () => {
    describe("Engineer", () => {
        describe("Initialization", () => {
            it("should create an object with a name, id, email, and github username", () => {
                const morgan = new Engineer("morgan", 1209, "morgan@morgan.morgan", "morgan123");

                expect(morgan.name).toEqual("morgan");
                expect(morgan.id).toEqual(1209);
                expect(morgan.email).toEqual("morgan@morgan.morgan");
                expect(morgan.github).toEqual("morgan123");
            })
        })
    })
})