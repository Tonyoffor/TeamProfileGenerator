const Employee = require("../lib/Employee");
    describe('Emplyee', () => {
        test('This will display the Employee name', () => {
          let employee = new Employee("name", "employeeID", "email")
          expect(employee.getName()).toBe("name");
          
        })})
    


    describe('Employee', () => {
        test('This will display the Employee employeeID', () => {
          let employee = new Employee("jon", 24)
          expect(employee.getEmployeeID()).toBe(24);
          
        })})

    describe('Employee', () => {
            test('This will display the Employee email', () => {
              let employee = new Employee("hon", "ttt", "email")
              expect(employee.getEmail()).toBe("email");
              
            })})

       