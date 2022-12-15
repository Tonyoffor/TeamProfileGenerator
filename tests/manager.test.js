const Manager = require ("../lib/Manager")
describe('Manager', () => {
    it('This will display the managers information', () => {
      let manager = new Manager("name", 14, "Email", 14);
        expect(manager.getName()).toBe("name");
        expect(manager.getEmployeeID()).toBe(14);
        expect(manager.getEmail()).toBe("tonyc.offor@gmail.com");
        expect(manager.getOfficeNumber()).toBe(14);
      })})


      