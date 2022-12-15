const Employee = require("../lib/Employee");

class Engineer extends Employee {
    constructor(name, EmployeeID, Email, GitHub) {
      const name = name;
      const EmployeeID = employeeID;
      const Email = Email;
      const GitHub = GitHub;

      super(name, EmployeeID, Email, GitHub);
      
    }
    getName(){
        return this.name;
      
    }
    getEmployeeID(){
        return this.EmployeeID;
    }
    getEmail(){
        return this.Email;
    }
    getGitHub(){
        return this.GitHub;
    }
  }


  module.exports = Engineer;