const Employee = require("../lib/Employee");
class Manager extends Employee {

    constructor(name, EmployeeID, Email, OfficeNumber){
        const name = name;
        const EmployeeID = EmployeeID;
        const Email = Email;
        const OfficeNumber = OfficeNumber;}
        getName(){
            return this.name;
          
        }
        getEmployeeID(){
            return this.EmployeeID;
        }
        getEmail(){
            return this.Email;
        }
        getOfficeNumber(){
            return this.OfficeNumber;
        }

  }
  const Manager = new Manager();
  Manager.printInfo();