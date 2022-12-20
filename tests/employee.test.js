const Employee = require("../lib/Employee");
    describe('Emplyee', () => {
        test('This will display the Employee name', () => {
          let employee = new Employee("name", "employeeID", "email")
          expect(employee.getName()).toBe("name");
          
        })})
    
//in order to carry out tests you need to make sure that the value you are testing is in the same position as in the js file it is connected to
// e.g to test name you would only need name in the new employee bracket but to test email you would need to add the values before email so that the test knows its position

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

       