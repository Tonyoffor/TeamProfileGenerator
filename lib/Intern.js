const Employee = require("../lib/Employee");

class Intern extends Employee {
    constructor(name, EmployeeID, Email, School) {
      const name = name;
      const EmployeeID = EmployeeID;
      const Email = Email;
      const School = School;

      super(name, EmployeeID, Email, School);
      
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
    getSchool(){
        return this.School;
    }
  }


  const Intern = new Engineer ()
Intern.printInfo();