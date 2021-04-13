
const { it, expect } = require("@jest/globals")
const Employee = require("../lib/employee")

describe("Employee", () => {
    describe("Initialization", () => {
        it("should create an object with a name, id, and email if provided arguments", () => {
            const mark = new Employee("Mark", 123, "markrules@gmail.com");

            expect(mark.name).toEqual("Mark");
            expect(mark.id).toEqual(123);
            expect(mark.email).toEqual("markrules@gmail.com");
        })
    })
})