const Employee = require("../lib/Employee");
describe('Employee', () => {
    it('This will display the Employee information', () => {
     let employee = new Employee("name", 4, "Email", 4)
     expect(manager.getName()).toBe("name");
     expect(manager.getEmployeeID()).toBe(14);
     expect(manager.getEmail()).toBe("tonyc.offor@gmail.com");
     expect(manager.getOfficeNumber()).toBe(14);
    })})


