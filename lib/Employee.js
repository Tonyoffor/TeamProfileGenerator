class Employee {
    constructor(name, employeeID, email ){
    this.name = name;
    this.employeeID = employeeID;
    this.email = email;
   this.role ="employee"
}

getName(){
  return this.name;

}
getEmployeeID(){
  return this.employeeID;
}
getEmail(){
  return this.email;
}
getRole(){
  return this.role;
}


}


module.exports = Employee;