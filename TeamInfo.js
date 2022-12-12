function Employee(name, EmployeeID, Email, OfficeNumber){
    this.name = name;
    this.EmployeeID = EmployeeID;
    this.Email = Email;
    this.OfficeNumber = OfficeNumber;
    this.teamMember = () =>{
        console.log(this.name + "has an ID of" + this.EmployeeID + "their email address is" + this.Email + "their office # is" +this.OfficeNumber);
    }
}

const manager = new Employee; 
const engineer = new Employee;
const intern = new Employee;

module.exports = Employee;