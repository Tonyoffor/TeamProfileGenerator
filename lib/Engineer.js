const Employee = require("../lib/Employee");

class Engineer extends Employee {
    constructor(name, employeeID, email, gitHub) {
      
        super(name, employeeID, email);
      this.gitHub = gitHub;
      this.role = "engineer"

      
      
    }
   
    getGitHub(){
        return this.gitHub;
    }
  }


  module.exports = Engineer;