const Employee = require("../lib/Employee");

class Intern extends Employee {
    constructor(name, employeeID, email, school) {
      
        super(name, employeeID, email);
      this.school = school;
      this.role = "intern"

      
      
    }
   
    getschool(){
        return this.school;
    }
    getRole(){
      return this.role
    }
  }






module.exports = Intern;