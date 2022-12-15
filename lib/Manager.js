const Employee = require("../lib/Employee");

class Manager extends Employee {
    constructor(name, employeeID, email, officeNumber) {
      
        super(name, employeeID, email);
      this.officeNumber = officeNumber;

      //here you have the manager details the new item being added is the office number thus why it is the only this item 
      
    }
   
    getofficeNumber(){
        return this.officeNumber;
    }
  }


  
  module.exports = Manager;