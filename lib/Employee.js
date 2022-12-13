class Employee {
    constructor(name, EmployeeID, Email, OfficeNumber){
    this.name = name;
    this.EmployeeID = EmployeeID;
    this.Email = Email;
    this.OfficeNumber = OfficeNumber;
}
printInfo() {
    console.log(`${this.name} is the manager of the tech team`);
    console.log(`Employee ID: ${this.EmployeeID}`);
    console.log(`Email: ${this.Email}`);
    console.log(`Office Number: ${this.OfficeNumber}`);
  }
}


module.exports = Employee;