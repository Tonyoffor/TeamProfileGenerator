const Employee = require("../lib/Employee");

class Intern extends Employee {
    constructor(name, employeeID, email, school) {
      
        super(name, employeeID, email);
      this.school = school;

      
      
    }
   
    getschool(){
        return this.school;
    }
  }






module.exports = Intern;