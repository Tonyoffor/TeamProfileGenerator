const Employee = require("../lib/Employee");

class Manager extends Employee {
    constructor(name, employeeID, email, officeNumber) {
      
        super(name, employeeID, email);
      this.officeNumber = officeNumber;
      this.role= "manager"

      //here you have the manager details the new item being added is the office number thus why it is the only this item 
      
    }
   
    getofficeNumber(){
        return this.officeNumber;
    }
    getRole(){
      return this.role
    }
  }


  
  module.exports = Manager;